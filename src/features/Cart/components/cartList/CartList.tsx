import List from '../../../../components/List';
import CartDeleteModal from "../cartDeleteModal";
import CartItem from "../cartItem";
import { CartListProvider } from "./context";
import { useCartList } from "./useCartList";

export default function CartList() {
	const { cartItems, setShowDeleteModal, showDeleteModal } = useCartList();

	//Use context here for deleting cart id
	return (
		<CartListProvider>
			<>
				<List
					data={cartItems}
					renderItem={(cartItem) => <CartItem {...cartItem} />}
					header={<h3 className="mx-4 font-bold text-lg">Items</h3>}
				/>
				<CartDeleteModal />
			</>
		</CartListProvider>
	);
}
