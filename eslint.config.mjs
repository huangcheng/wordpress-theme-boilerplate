import prettier from 'eslint-plugin-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';
import typescript from 'eslint-config-typescript';
import unicorn from 'eslint-plugin-unicorn';

export default [
  {
    files: ['**/**/*.{js,mjs,ts}'],
    plugins: {
      typescript,
      prettier,
      tailwindcss,
      unicorn,
    },
  },
  {
    ignores: ['vendor/*', 'dist/*'],
  },
];
