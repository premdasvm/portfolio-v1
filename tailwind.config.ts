import type { Config } from 'tailwindcss';
import TailwindForms from '@tailwindcss/forms';
import TailwindAspectRatio from '@tailwindcss/aspect-ratio';
import TailwindTypography from '@tailwindcss/typography';
import TailwindAnimate from 'tailwindcss-animate';

const config = {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',
			},
			fontFamily: {
				sans: ['Poppins'],
			},
			animation: {
				'background-shine': 'background-shine 2s linear infinite',
			},
			keyframes: {
				'background-shine': {
					from: {
						backgroundPosition: '0 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},
			},
		},
	},
	plugins: [TailwindForms({ strategy: 'class' }), TailwindAspectRatio, TailwindTypography, TailwindAnimate],
} satisfies Config;

export default config;
