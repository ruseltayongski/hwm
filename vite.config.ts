import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    //open: true,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@/": `${pathSrc}/`,
    },
  },
  plugins: [vue()]
})
