import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/scripts/index.ts',
  output: {
    dir: 'dist/assets/js',
    format: 'iife',
    name: 'app',
    sourcemap: true,
  },
  plugins: [
    resolve({
      extensions: ['.ts'],
    }),
    babel({
      extensions: ['.ts'],
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
