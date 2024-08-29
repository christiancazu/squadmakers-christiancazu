import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2';
import * as path from 'node:path';

const name = 'index'

export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name,
      fileName: format => `${name}.${format}.${format === 'es' ? 'm' : ''}js`,
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        exports: "named",
        globals: {
          'vue': 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
