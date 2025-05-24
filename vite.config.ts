import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Allows using @/ instead of relative paths
    },
  },
  build: {
    chunkSizeWarningLimit: 1500, // ⬅️ Increase limit to 1500 KB (you can adjust as needed)
  },
});
