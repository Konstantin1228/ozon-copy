/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
    ],
    theme: {
        screens: {
            'l': '1432px',
        },
        colors: {
            black: '#000',
            white: '#fff',
            blue: {
                100: '#e5efff',
                300: 'rgba(0,150,255,.078)',
                500: '#005bff',
                700: 'rgba(0,26,52,.6)',
            },
            gray: {
                300: 'rgba(0,48,120,.039)',
                500: '#b3bcc5'
            }
        },
    },
    plugins: [],
}
