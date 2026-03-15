import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    exclude: ['@react-three/drei', '@react-three/fiber'],
    include: ['three', 'react', 'react-dom'],
  },
  ssr: {
    noExternal: ['@react-three/drei', '@react-three/fiber', 'three'],
  },
  resolve: {
    dedupe: ['three', 'react', 'react-dom'],
  },
})
