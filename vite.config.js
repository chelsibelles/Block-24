import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this points to the root directory
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});