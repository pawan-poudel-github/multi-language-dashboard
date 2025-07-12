import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import tanstackRouter from '@tanstack/router-plugin/vite';
import { resolve } from 'node:path';
import Unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Poppins',
            styles: 'wght@400;500;700;800;900', // or other weights/styles
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
