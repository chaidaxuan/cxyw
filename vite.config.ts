import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
const resolve = (dir: string) => path.resolve(__dirname, dir)
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  base: '/cxyw/',

  resolve: {
    alias: {
      '@': resolve('src'),
    },

  },

})
