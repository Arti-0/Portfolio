import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {

        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  plugins: [react()],
})
