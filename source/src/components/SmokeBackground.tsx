import { useEffect, useRef } from "react";

/**
 * Full-screen colourful smoke flowing behind the homepage (WebGL shader).
 *
 * Domain-warped noise whose colour drifts violet → pink → cyan → blue. Renders
 * at half resolution (smoke is soft, so it scales up cleanly), pauses while the
 * tab is hidden, shows one still frame for visitors who prefer reduced motion,
 * and falls back to the CSS gradient on <html> if WebGL isn't available.
 *
 * Tweak the look in FRAG: SPEED (flow speed), palette() colours and
 * BRIGHTNESS (keep it low enough for text to stay readable).
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;
uniform float u_time;

#define SPEED 0.06
#define BRIGHTNESS 0.7

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = rot * p * 2.0 + 3.1; a *= 0.5; }
  return v;
}

// violet → pink → cyan → blue → back to violet
vec3 palette(float t) {
  vec3 violet = vec3(0.52, 0.24, 1.00);
  vec3 pink   = vec3(0.96, 0.28, 0.74);
  vec3 cyan   = vec3(0.16, 0.80, 0.98);
  vec3 blue   = vec3(0.26, 0.34, 1.00);
  float s = fract(t) * 4.0;
  if (s < 1.0) return mix(violet, pink, smoothstep(0.0, 1.0, s));
  if (s < 2.0) return mix(pink, cyan, smoothstep(1.0, 2.0, s));
  if (s < 3.0) return mix(cyan, blue, smoothstep(2.0, 3.0, s));
  return mix(blue, violet, smoothstep(3.0, 4.0, s));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res.y;
  float t = u_time * SPEED;

  vec2 p = uv * 1.4 + vec2(t * 0.6, t * 0.25);
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p + 3.8 * q + vec2(1.7, 9.2) + 0.2 * t), fbm(p + 3.8 * q + vec2(8.3, 2.8) - 0.15 * t));
  float f = fbm(p + 3.8 * r);

  vec3 smoke = palette(length(q) * 0.9 + r.x * 0.5 + t * 0.35);
  float density = smoothstep(0.25, 0.95, f);
  vec3 base = vec3(0.020, 0.016, 0.045);
  vec3 col = mix(base, smoke, density * 0.85);
  col += smoke * pow(density, 3.0) * 0.4;

  // Darken toward the edges and through the centre column so copy stays readable.
  vec2 c = gl_FragCoord.xy / u_res - 0.5;
  col *= 1.0 - dot(c, c) * 0.8;
  col *= mix(0.62, 1.0, smoothstep(0.0, 0.42, abs(c.x)));
  gl_FragColor = vec4(col * BRIGHTNESS, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

const SmokeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!canvas || !gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    const SCALE = 0.5;
    const resize = () => {
      canvas.width = Math.max(1, Math.floor(window.innerWidth * SCALE));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;

    const draw = (now: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000 + 30);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reduceMotion && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(draw);
    };
    const onResize = () => {
      resize();
      if (reduceMotion) draw(performance.now());
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(draw);
    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-[1500ms]"
    />
  );
};

export default SmokeBackground;
