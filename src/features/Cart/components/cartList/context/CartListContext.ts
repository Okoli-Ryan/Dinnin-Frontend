import { createContext, useContext } from "react";

interface ICartListContext {
	deleteItemId: string | null;
	setDeleteItemId: (e: string | null) => void;
}

export const CartListContext = createContext({} as ICartListContext);

export const useCartListContext = () => useContext(CartListContext);
