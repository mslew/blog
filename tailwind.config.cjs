/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'layout': '8% repeat(7, minmax(0, 1fr))'
			},
			gridRow: {
				'span-8': 'span 8 / span 8',
				'span-7': 'span 7 / span 7'
			}
		},
	},
	plugins: [],
}
