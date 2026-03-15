import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'three-stdlib'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    dedupe: ['three', 'react', 'react-dom'],
  },
})
