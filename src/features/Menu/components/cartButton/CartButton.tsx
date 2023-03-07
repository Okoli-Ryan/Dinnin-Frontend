import { BsFillCartFill } from 'react-icons/bs';

import Button from '../../../../components/Button';
import CartModal from "../../../Cart";
import { useCartButton } from './useCartButton';

export default function CartButton() {
	const { cartItemsCount, showCartModal, hideCartModal, isCartModalOpen, isDisabled } =
		useCartButton();

	return (
		<>
			<CartModal isOpen={isCartModalOpen} hideCartModal={hideCartModal} />
			<div className="w-full px-8 fixed z-20 bottom-4">
				<Button
					shape="round"
					block
					size="large"
					disabled={isDisabled}
					onClick={showCartModal}
					className=" text-white bg-[#F2F4F5] font-semibold disabled:bg-[#F2F4F5] border-0"
					type="primary"
					icon={
						<>
							<span className="top-[10px] left-5 absolute">
								<BsFillCartFill color={isDisabled ? "#CCC" : "#FFF"} size={18} />
							</span>
							<span className="top-[10px] right-5 absolute">
								<p
									className={`w-5 h-5 rounded-full ${
										isDisabled ? "bg-[#CCC]" : "bg-primary/70"
									} text-xs flex justify-center items-center`}>
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
