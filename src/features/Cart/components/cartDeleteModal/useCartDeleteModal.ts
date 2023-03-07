import { dispatch } from "../../../../store";
import { useCartListContext } from "../cartList/context";

export const useCartDeleteModal = () => {
	const { deleteItemId, setDeleteItemId } = useCartListContext();
	const isModalOpen = !!deleteItemId;

	const deleteItem = () => {
		dispatch.cart.removeCartItem(deleteItemId!);
		setDeleteItemId(null);
	};

	const hideDeleteModal = () => setDeleteItemId(null);

	return { isModalOpen, deleteItem, hideDeleteModal };
};
