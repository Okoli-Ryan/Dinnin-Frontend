import List from "../../../../components/List";
import { useAppSelector } from "../../../../store";
import CheckoutItem from "../checkoutItem";
import { ParseCheckoutList } from "./utils";

export default function CheckoutList() {
	const cartItems = useAppSelector((state) => state.cart);
	const parsedCartItems = ParseCheckoutList(cartItems);

	return (
		<List
			className="p-4 py-0 border-b-2"
			data={parsedCartItems}
			renderItem={([categoryName, menuItems], index) => (
				<CheckoutItem index={index! + 1} category={categoryName} menuItems={menuItems} />
			)}
			header={<h3 className="font-bold text-lg pt-0">Your Order</h3>}
		/>
	);
}
