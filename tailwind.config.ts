/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
    ],
    theme: {
        screens: {
            'l': '1472px',
        },
        colors: {
            green: '#000'
        },
    },
    plugins: [],
}
