import List from '../../../../components/List';
import CartItem from '../cartItem';
import { Dummy__CartList } from './CartList.dummy';

export default function CartList() {
	return (
		<List
			data={Dummy__CartList}
			renderItem={(el) => <CartItem />}
			header={<h3 className="mx-4 font-bold text-lg">Items</h3>}
		/>
	);
}
