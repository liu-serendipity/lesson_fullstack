import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 3000 frontend  8080 backend api server
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock'
    })
  ]
})
