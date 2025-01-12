import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ["cjs"],
      fileName: 'main'
    },
    rollupOptions: {
      external: ['obsidian'],
      output: {
        dir: 'dist/action-kanban',
        entryFileNames: 'main.js',
      }
    }
  },
});