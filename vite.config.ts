import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "src/**/*.svg",
    })],
  base: './',
  build: {
    rollupOptions: {
      input: {
          main: resolve(__dirname, 'index.html'),
          legals: resolve(__dirname, 'legals.html')
      }
    }
  }
})
