/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#003366',
                'safety-yellow': '#FFD700',
                'neutral-gray': '#4D4D4D',
                'off-white': '#F5F5F5',
                'dark-blue': '#001F3F',
            },
            fontFamily: {
                'heading': ['Montserrat', 'Roboto', 'sans-serif'],
                'body': ['Open Sans', 'Arial', 'sans-serif'],
                'bebas': ['Bebas Neue', 'sans-serif'],
            },
            borderRadius: {
                'card': '8px',
            },
        },
    },
    plugins: [],
}
