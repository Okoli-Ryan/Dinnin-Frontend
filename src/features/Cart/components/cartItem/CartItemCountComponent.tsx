import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { dispatch, useAppSelector } from "../../../../store";

export default function CartItemCountComponent({ id }: { id: string }) {
	const { unit, increaseUnit, decreaseUnit } = useCartItemCountComponent(id);

	return (
		<div className="flex rounded-full border-2 items-center">
			<button className="p-[2px] px-2" onClick={decreaseUnit}>
				<AiOutlineMinus size={14} className="text-primary" />
			</button>
			<span className="p-2 text-xs">{unit}</span>
			<button className="p-[2px] px-2" onClick={increaseUnit}>
				<AiOutlinePlus size={14} className="text-primary" />
			</button>
		</div>
	);
}

const useCartItemCountComponent = (id: string) => {
	const cart = useAppSelector((state) => state.cart);
	const cartItem = cart[id];
	const unit = cartItem.unit;

	function increaseUnit() {
		dispatch.cart.increaseUnit(id);
	}

	function decreaseUnit() {
		dispatch.cart.decreaseUnit(id);
	}

	return { unit, increaseUnit, decreaseUnit };
};
