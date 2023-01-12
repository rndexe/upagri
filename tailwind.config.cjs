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
            'open': ['Open Sans', 'sans-serif'],
            'lato': ['Lato', 'sans-serif'],
            'oxygen': ['Oxygen', 'sans-serif']

        },
        dropShadow: {
            DEFAULT: '0 15px 15px rgba(0, 0, 0, 0.75)',
 
          },
        extend : {
            spacing : {
                '160' : '40rem'
            },
            screens : {
                'sm' : '576px',
                'md' : '768px',
                'lg' : '1024px',
                'xl' : '1280px',
                '2xl' : '1440px'
            }
        }
    },

}
