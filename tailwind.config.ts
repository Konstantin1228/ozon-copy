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
            'white-64': 'rgba(255, 255, 255, 0.64)',
            blue: {
                100: '#e5efff',
                300: 'rgba(0,150,255,.078)',
                500: '#005bff',
                700: 'rgba(0,26,52,.6)',
            },
            gray: {
                300: 'rgba(0,48,120,.039)',
                400: 'rgba(0, 0, 0, 0.48)',
                500: '#b3bcc5',
                700: '#99a3ae'
            },
            purple: 'rgb(91, 81, 222)',
            green: '#10c44c',
            red: '#f91155'
        },
    },
    plugins: [],
}
