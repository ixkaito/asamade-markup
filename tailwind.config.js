/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

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
  plugins: [
    plugin(function ({ matchComponents, theme, addVariant }) {
      matchComponents(
        {
          button: (value) => ({
            color: value,
            borderRadius: '100vmax',
            border: `1px solid ${value}`,
            padding: '0.5em 1em',
            transition: 'all 0.1s',

            '&:hover': {
              color: theme('colors.white'),
              backgroundColor: value,
            },
          }),
        },
        {
          values: flattenColorPalette(theme('colors')),
        },
      );

      addVariant('touch', '@media (hover: none)');
    }),
  ],
};
