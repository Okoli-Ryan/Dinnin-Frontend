import { createContext, useContext } from "react";

export interface ICheckoutContext {
	discountCode: string;
	changeDiscountCode: (e: string) => void;
}

export const CheckoutContext = createContext({} as ICheckoutContext);

export const useCheckoutContext = () => useContext(CheckoutContext);
