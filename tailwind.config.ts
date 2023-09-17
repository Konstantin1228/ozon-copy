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
                300: 'rgba(0,150,255,.078)',
                500: '#005bff',
                700: 'rgba(0,26,52,.6)',
            },
            gray: 'rgba(0,48,120,.039)'
        },
    },
    plugins: [],
}
