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
                secoundary: "#09090B",
                white: "white"
            },
        },
    },
    plugins: [],
};
