export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const X_API_KEY = import.meta.env.VITE_API_KEY;

export interface IPaymentOption {
	value: string;
	label: string;
}

export const PAYMENT_OPTIONS = [
	{ value: "Cash", label: "Pay with Cash" },
	{ value: "POS", label: "POS" },
];

export const HeaderImage = "https://res.cloudinary.com/okoliryan50/image/upload/v1678697547/Orderup/static/Hero_ygld8c.png"