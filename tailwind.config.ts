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
		},
	},
	plugins: [TailwindForms({ strategy: 'class' }), TailwindAspectRatio, TailwindTypography, TailwindAnimate],
} satisfies Config;

export default config;
