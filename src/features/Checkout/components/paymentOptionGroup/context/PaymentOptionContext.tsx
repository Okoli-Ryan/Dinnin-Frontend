import { createContext, useContext } from "react";

const PaymentOptionContext = createContext(null);

interface IPaymentOptionProvider {
	children: JSX.Element;
}

// export const PaymentOptionProvider = ({ children }: IPaymentOptionProvider) => {

//     <PaymentOptionContext.Provider value={}>
//         {children}
//     </PaymentOptionContext.Provider>

// }

export const usePaymentOptionContext = () => {
	const values = useContext(PaymentOptionContext);

	return values;
};
