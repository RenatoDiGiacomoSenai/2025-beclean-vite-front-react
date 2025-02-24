import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [viteReact(), tsconfigPaths()],
  server: {
    port: 3000,
  },
})
