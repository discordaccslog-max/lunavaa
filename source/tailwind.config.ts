import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Iowan Old Style', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(18px)", filter: "blur(8px)" },
          to: { opacity: "1", transform: "none", filter: "none" },
        },
        shimmer: {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "60%, 100%": { transform: "translateX(320%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        radar: {
          "0%": { transform: "scale(0.6)", opacity: "0.9" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        heartbeat: {
          from: { strokeDashoffset: "240" },
          to: { strokeDashoffset: "0" },
        },
        "sale-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(244, 114, 182, 0.0)" },
          "50%": { boxShadow: "0 0 30px 2px rgba(244, 114, 182, 0.35)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "enter": "fade-in 0.4s ease-out, scale-in 0.3s ease-out",
        rise: "rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 8s linear infinite",
        sweep: "sweep 4.5s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "spin-slow": "spin-slow 6s linear infinite",
        radar: "radar 2.2s cubic-bezier(0, 0, 0.2, 1) infinite",
        heartbeat: "heartbeat 2.4s linear infinite",
        "sale-glow": "sale-glow 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
