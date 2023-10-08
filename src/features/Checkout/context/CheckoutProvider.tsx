import { useState } from "react";

import { CheckoutContext } from "./CheckoutContext";

interface ICheckoutProvider {
	children: React.ReactNode;
}

export const CheckoutProvider = ({ children }: ICheckoutProvider) => {
	const [discountCode, setDiscountCode] = useState("");

	function changeDiscountCode(e: string) {
		setDiscountCode(e);
	}

	return <CheckoutContext.Provider value={{ discountCode, changeDiscountCode }}>{children}</CheckoutContext.Provider>;
};
