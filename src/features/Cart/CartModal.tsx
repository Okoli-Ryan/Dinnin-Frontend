import './CartModal.css';

import { RxCross1 } from 'react-icons/rx';

import AppAdvert from '../../components/AppAdvert';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import CartList from './components/cartList';
import { useCartModal } from "./components/useCartModal";

interface ICartModalProps {
	isOpen: boolean;
	hideCartModal: () => void;
}

export default function CartModal({ isOpen, hideCartModal }: ICartModalProps) {
	const { navigateToCheckout } = useCartModal();

	return (
		<Modal.FullScreen
			onCancel={hideCartModal}
			isOpen={isOpen}
			header={<CartModalHeader hideCartModal={hideCartModal} />}
			className="relative pb-12"
			wrapClassName="!overflow-hidden cart-modal">
			<AppAdvert />
			<CartList />
			<div className="fixed bottom-4 w-full flex justify-center px-8">
				<Button onClick={navigateToCheckout} className="text-white w-full">
					Proceed to Checkout
				</Button>
			</div>
			{/* <CartDeleteModal /> */}
		</Modal.FullScreen>
	);
}

const CartModalHeader = ({ hideCartModal }: { hideCartModal: () => void }) => {
	return (
		<div className="p-4 pb-2 flex justify-between items-center">
			<span className="flex flex-1" onClick={hideCartModal}>
				<RxCross1 />
			</span>
			<h4 className="font-bold text-text_primary text-center flex-1">Cart</h4>
			<div className="flex-1 flex"></div>
		</div>
	);
};
