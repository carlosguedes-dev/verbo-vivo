import { defineConfig } from 'vite'

export default defineConfig({
  // ─── BASE ───────────────────────────────────────────────────────────
  // Configurado para publicação direta no GitHub Pages:
  // https://carlosguedes-dev.github.io/verbo-vivo/
  base: '/verbo-vivo/',

  build: {
    outDir: 'dist',
  },
})
