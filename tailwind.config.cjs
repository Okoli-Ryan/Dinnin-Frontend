const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				["text_primary"]: "#12121299",
				["text_primary_bold"]: "#121212",
				primary: "#F2003C",
			},
			fontFamily: {
				sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
