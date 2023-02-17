import List from '../../../../components/List';
import CheckoutItem from '../checkoutItem';
import { Dummy_CheckoutList } from './CheckoutList.dummy';

export default function CheckoutList() {
	return (
		<List
			className="p-4 pb-0 border-b-2"
			data={Dummy_CheckoutList}
			renderItem={(el) => <CheckoutItem />}
			header={<h3 className="font-bold text-lg">Your Order</h3>}
		/>
	);
}
