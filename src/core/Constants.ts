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
