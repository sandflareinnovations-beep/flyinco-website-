/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6A2B86", // Deep purple from the new logo
                secondary: "#1A0933", // Even darker purple/navy for headings and footer
                dark: "#1A0933",
                accent: "#ffffff",
                grayLight: "#F8F9FA",
            },
            fontFamily: {
                display: ['"Poppins"', "sans-serif"],
                body: ['"Inter"', "sans-serif"],
            },
        },
    },
    plugins: [],
}
