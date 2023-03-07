import { useState } from "react";

import { CheckoutContext } from "./CheckoutContext";

interface ICheckoutProvider {
	children: JSX.Element;
}

export const CheckoutProvider = ({ children }: ICheckoutProvider) => {
	const [discountCode, setDiscountCode] = useState("");

	function changeDiscountCode(e: string) {
		setDiscountCode(e);
	}

	return (
		<CheckoutContext.Provider value={{ discountCode, changeDiscountCode }}>
			{children}
		</CheckoutContext.Provider>
	);
};
