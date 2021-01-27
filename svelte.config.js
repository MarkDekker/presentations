const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript',
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-nesting'),
    ],
  }),
};