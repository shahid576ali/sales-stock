import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // base: "/sales-stock/",
  // build: {
  //   outDir: 'dist',  // Ensure the output folder is set to 'dist'
  // },
})