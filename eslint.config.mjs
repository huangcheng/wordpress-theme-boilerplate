import prettier from 'eslint-config-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';
import typescript from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';

export default [
  prettier,
  unicorn.configs['flat/recommended'],
  ...typescript.configs.recommended,
  {
    files: ['**/**/*.{js,mjs,ts}'],
    plugins: {
      tailwindcss,
    },
  },
  {
    ignores: ['vendor/*', 'dist/*'],
  },
];
