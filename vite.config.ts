import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 固定這幾層
      '~app': path.resolve('src/app'),
      '~pages': path.resolve('src/pages'),
      '~widgets': path.resolve('src/widgets'),
      '~features': path.resolve('src/features'),
      '~entities': path.resolve('src/entities'),
      '~shared': path.resolve('src/shared'),
    },
  },
});
