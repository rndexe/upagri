/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,svelte,html}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'green': {
                DEFAULT: '#2C5318',
                dark: '#38503D',
            },
            'gray': {
                DEFAULT: '#2D3636',
                10: '#BDBDBD',
                15: '#828282',
                20: '#4F4F4F',

            },
            'eggshell': '#F0F2EA',
            'white': '#ffffff',
            'black': '#000000'
        },
        fontFamily: {
            'azeret': ['Azeret Mono', 'monospace'],
            'pt': ['PT Sans ', 'sans-serif']

        },
        extend : {
            spacing : {
                '160' : '40rem'
            },
            screens : {
                'sm' : '576px',
                'md' : '768px',
                'lg' : '992px',
                'xl' : '1281px',
                '2xl' : '1440px'
            }
        }
    },
    plugins: [],
}
