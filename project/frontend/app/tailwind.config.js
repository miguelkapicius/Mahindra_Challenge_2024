/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                mobile: "250px",
            },
            colors: {
                primary: "#5271FF",
                secoundary: "#0D0D0D",
                white: "white"
            },
        },
    },
    plugins: [],
};
