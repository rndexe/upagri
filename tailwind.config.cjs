/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'h': ['Azeret Mono', 'monospace']
            },
            colors: {
                'primary': '#2C5318',
                'body': '#2D3636',
                'base': '#F0F2EA'
            },
        },
    },
    plugins: [],
}
