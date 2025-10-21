import path from 'path'
// https://vitejs.dev/config/
import { fileURLToPath } from 'url'
/// <reference types="vitest/config" />
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [viteReact(), tailwindcss(), analyzer({
    analyzerMode: 'server',
    analyzerPort: 8889,
    open: true,
    gzipSize: true,
    brotliSize: true,
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['@tanstack/react-router'],
          ui: ['@radix-ui/react-slot', 'lucide-react'],
          tonconnect: ['@tonconnect/ui-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
