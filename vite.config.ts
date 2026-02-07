import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure relative paths for assets so it works on GitHub Pages subdirectories
  base: './',
  build: {
    // Ensure the output directory is 'dist'
    outDir: 'dist',
    // Since we are using a raw index.html, we don't strictly need a rollup input, 
    // but Vite needs to know what to build.
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
