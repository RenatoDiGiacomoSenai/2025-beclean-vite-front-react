import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'node_modules',
        'dist',
        'cypress',
        'src/**/*.stories.{js,jsx,ts,tsx}',
        '**/*.d.ts',
      ],
    },
    setupFiles: './vitest-setup.js',
  },
})

