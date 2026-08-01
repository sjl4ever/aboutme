import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  // The prerender server stays at the root while browser assets use the
  // repository subpath on GitHub Pages.
  base: process.env.NEXT_PUBLIC_BASE_PATH
    ? process.env.NEXT_PUBLIC_BASE_PATH + "/"
    : "/",
  plugins: [vinext()],
});
