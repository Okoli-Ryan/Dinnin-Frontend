import { RxCross1 } from 'react-icons/rx';

import AppAdvert from '../../components/AppAdvert';
import Modal from '../../components/Modal';
import CartDeleteModal from './components/cartDeleteModal';
import CartList from './components/cartList';

export default function CartModal() {
	return (
		<Modal.FullScreen isOpen header={<CartModalHeader />}>
			<AppAdvert />
			<CartList />
			<CartDeleteModal />
		</Modal.FullScreen>
	);
}

const CartModalHeader = () => {
	return (
		<div className="p-4 pb-2 flex justify-between items-center">
			<span className="flex flex-1">
				<RxCross1 />
			</span>
			<h4 className="font-bold text-text_primary text-center flex-1">Cart</h4>
			<div className="flex-1 flex"></div>
		</div>
	);
};
