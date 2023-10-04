/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'8': 'repeat(8, minmax(0, 1fr))',
				'10': 'repeat(10, minmax(0, 1fr))'
			},
			gridRow: {
				'span-8': 'span 8 / span 8',
				'span-7': 'span 7 / span 7',
				'span-10': 'span 10 / span 10'
			}
		},
	},
	plugins: [],
}
