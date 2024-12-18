import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import du module path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias ajouté ici
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
