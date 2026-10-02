// Builds the site and copies it to the repository root, which GitHub Pages serves.
// Usage (from /source): npm run publish-site
import { cpSync, copyFileSync, rmSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist");
const root = resolve("..");

rmSync(resolve(root, "assets"), { recursive: true, force: true });
for (const entry of readdirSync(dist)) {
  cpSync(resolve(dist, entry), resolve(root, entry), { recursive: true });
}
// GitHub Pages serves 404.html for unknown paths (e.g. /terms on refresh);
// making it the app itself lets the router show the right page.
copyFileSync(resolve(dist, "index.html"), resolve(root, "404.html"));
console.log("Published dist/ to repository root.");
