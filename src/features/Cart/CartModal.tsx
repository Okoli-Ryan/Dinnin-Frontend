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
			<div className="fixed flex justify-center w-full px-8 bottom-4">
				<Button onClick={navigateToCheckout} className="w-full text-white">
					Proceed to Checkout
				</Button>
			</div>
			{/* <CartDeleteModal /> */}
		</Modal.FullScreen>
	);
}

const CartModalHeader = ({ hideCartModal }: { hideCartModal: () => void }) => {
	return (
		<div className="flex items-center justify-between p-4 pb-2">
			<span className="flex flex-1" onClick={hideCartModal}>
				<RxCross1 />
			</span>
			<h4 className="flex-1 font-bold text-center text-text_primary">Cart</h4>
			<div className="flex flex-1"></div>
		</div>
	);
};
