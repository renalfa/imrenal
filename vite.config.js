import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/firebase-storage": {
        target: "https://firebasestorage.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/firebase-storage/, ""),
      },
    },
  },
});
