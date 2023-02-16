const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				['text_primary']: "#12121299",
			},
            fontFamily: {
                'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
              },
		},
	},
	plugins: [],
};
