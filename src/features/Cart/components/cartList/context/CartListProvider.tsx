import { useState } from "react";

import { CartListContext } from "./CartListContext";

interface ICartListProviderProps {
	children: JSX.Element;
}

export const CartListProvider = ({ children }: ICartListProviderProps) => {
	const [deleteItemId, setDeleteId] = useState<string | null>(null);

	function setDeleteItemId(e: string | null) {
		setDeleteId(e);
	}

	return (
		<CartListContext.Provider
			value={{
				deleteItemId,
				setDeleteItemId,
			}}>
			{children}
		</CartListContext.Provider>
	);
};
