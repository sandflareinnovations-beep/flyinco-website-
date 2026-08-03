/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
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
                // Neutral surface tints derived from the brand purple — used for
                // section backgrounds and hairlines so nothing introduces a
                // second hue.
                surface: "#F7F5FA",
                surfaceDeep: "#EBE5F2",
            },
            fontFamily: {
                display: ["var(--font-poppins)", '"Poppins"', "sans-serif"],
                body: ["var(--font-inter)", '"Inter"', "sans-serif"],
            },
        },
    },
    plugins: [],
}
