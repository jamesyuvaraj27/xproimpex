import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(process.cwd(), 'src') },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
  },
  // lucide-react's package barrel re-exports 1000+ individual icon modules;
  // left external, Node's SSR runtime import has to resolve the entire
  // barrel from disk on every cold start. Bundling it inline avoids that.
  ssr: {
    noExternal: ['lucide-react'],
  },
})
