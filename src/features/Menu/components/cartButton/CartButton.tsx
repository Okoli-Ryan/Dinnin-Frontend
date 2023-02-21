import { BsFillCartFill } from 'react-icons/bs';

import Button from '../../../../components/Button';
import CartModal from "../../../Cart";
import { useCartButton } from './useCartButton';

export default function CartButton() {
	const { cartItemsCount, showCartModal, hideCartModal, isCartModalOpen } = useCartButton();

	return (
		<>
			<CartModal isOpen={isCartModalOpen} hideCartModal={hideCartModal} />
			<div className="w-full px-8 fixed z-20 bottom-4">
				<Button
					shape="round"
					block
					size="large"
					onClick={showCartModal}
					className=" text-white bg-[#E3E5E5] font-semibold"
					type="primary"
					icon={
						<>
							<span className="top-[10px] left-5 absolute">
								<BsFillCartFill color="white" size={18} />
							</span>
							<span className="top-[10px] right-5 absolute">
								<p className="w-5 h-5 rounded-full bg-[#c50434] text-xs flex justify-center items-center">
									{cartItemsCount}
								</p>
							</span>
						</>
					}>
					View Cart
				</Button>
			</div>
		</>
	);
}
