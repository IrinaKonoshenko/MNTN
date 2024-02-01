/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./markup/**/*.html'],
    theme: {
        extend: {
            backgroundImage: {
                cloud: "url('../../static/img/content/HG.jpg')",
                mountain: "url('../../static/img/content/MG.jpg')",
                human: "url('../../static/img/content/VG.jpg')",
            },
        },
    },
    plugins: [],
};
