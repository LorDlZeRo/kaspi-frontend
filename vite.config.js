import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js', // Добавленный алиас для Vue
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
