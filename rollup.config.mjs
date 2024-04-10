import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/scripts/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve({
      extensions: ['.ts'],
    }),
    babel({
      extensions: ['.ts'],
      babelHelpers: 'bundled',
    }),
  ],
};
