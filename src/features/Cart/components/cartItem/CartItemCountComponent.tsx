import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";

import { dispatch, useAppSelector } from "../../../../store";

export default function CartItemCountComponent({ id }: { id: string }) {
	const { quantity, increaseQuantity, decreaseQuantity, removeCartItem } =
		useCartItemCountComponent(id);

	return (
		<div className="flex justify-end gap-2 items-center min-w-[120px] max-w-[150px] w-2/5">
			<div className="flex rounded-full border-2 items-center">
				<button className="p-[2px] px-2" onClick={decreaseQuantity}>
					<AiOutlineMinus size={14} className="text-primary" />
				</button>
				<span className="p-2 text-xs">{quantity}</span>
				<button className="p-[2px] px-2" onClick={increaseQuantity}>
					<AiOutlinePlus size={14} className="text-primary" />
				</button>
			</div>
			<button onClick={removeCartItem}>
				<IoMdTrash size={20} />
			</button>
		</div>
	);
}

const useCartItemCountComponent = (id: string) => {
	const cart = useAppSelector((state) => state.cart);
	const cartItem = cart[id];
	const quantity = cartItem.quantity;

	function increaseQuantity() {
		dispatch.cart.increaseQuantity(id);
	}

	function decreaseQuantity() {
		dispatch.cart.decreaseQuantity(id);
	}
	function removeCartItem() {
		dispatch.cart.removeCartItem(id);
	}

	return { quantity, increaseQuantity, decreaseQuantity, removeCartItem };
};
