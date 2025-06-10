import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // important si tu veux accepter des connexions réseau
    allowedHosts: ['frontend'],
  },
})
