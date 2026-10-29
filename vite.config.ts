import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), 'index.html'),
        app: path.resolve(process.cwd(), 'app.html')
      }
    }
  }
});
