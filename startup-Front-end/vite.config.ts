import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Lancez le serveur sur le port 3000
    open: true, // Ouvre le projet automatiquement dans le navigateur
  },
  resolve: {
    alias: {
      '@': '/src', // Utilisation de '@' pour accéder au dossier 'src'
    },
  },
  build: {
    outDir: 'dist', // Répertoire pour les fichiers construits
    emptyOutDir: true, // Vide le répertoire 'dist' avant de le remplir
  },
  base: '/', // Gardez la base à '/' pour le développement local
});
