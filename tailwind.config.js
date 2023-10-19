/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      jost: "'Jost', sans-serif",
      fraunces: "'Fraunces', serif",
      italiana: "'Italiana', sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        25: 'repeat(25, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
      },
    },
  },
  plugins: [],
};
