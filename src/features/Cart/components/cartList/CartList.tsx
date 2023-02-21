import List from '../../../../components/List';
import { useAppSelector } from "../../../../store";
import CartItem from "../cartItem";

export default function CartList() {

    const cart = useAppSelector((state) => state.cart);
	const cartItems = Object.values(cart);

	return (
		<List
			data={cartItems}
			renderItem={(cartItem) => <CartItem {...cartItem} />}
			header={<h3 className="mx-4 font-bold text-lg">Items</h3>}
		/>
	);
}
