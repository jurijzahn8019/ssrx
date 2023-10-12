// @ts-expect-error ignore
import { solidPlugin } from 'esbuild-plugin-solid';
import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  format: 'esm',
  sourcemap: true,
  clean: true,
  entry: ['src/index.ts'],
  esbuildPlugins: [
    solidPlugin({
      solid: {
        generate: 'ssr',
      },
    }),
  ],
});
