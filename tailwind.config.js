/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                urgent: {
                    DEFAULT: '#D80032', // Crimson Red
                    hover: '#B00020',
                },
                trust: {
                    DEFAULT: '#001F3F', // Navy
                    light: '#003366',
                },
                solution: {
                    DEFAULT: '#00BA88', // Teal Green
                    hover: '#00966D',
                },
                dark: {
                    DEFAULT: '#0F0F0F', // Almost Black
                    surface: '#1E1E1E',
                },
                light: {
                    DEFAULT: '#F8FAFC', // Off White
                    gray: '#E2E8F0',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
