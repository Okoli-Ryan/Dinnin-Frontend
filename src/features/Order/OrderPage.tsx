

import CartButton from './components/cartButton';
import Header from './components/header';
import OrderList from './components/orderList';

export default function OrderPage() {
	return (
		<div>
			<Header />
			<OrderList />
            <CartButton />
		</div>
	);
}
