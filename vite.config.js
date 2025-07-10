import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // ✅ tells Vite to use relative paths
  plugins: [react()],
});
