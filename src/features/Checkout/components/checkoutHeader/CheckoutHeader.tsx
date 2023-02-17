import { FaChevronLeft } from 'react-icons/fa';

export default function CheckoutHeader() {
	return (
		<div className="p-4 pb-2 flex justify-between items-center">
			<span className="flex flex-1">
				<FaChevronLeft className="text-text_primary" />
			</span>
			<h4 className="font-bold text-text_primary text-center flex-1">Checkout</h4>
			<div className="flex-1 flex"></div>
		</div>
	);
}
