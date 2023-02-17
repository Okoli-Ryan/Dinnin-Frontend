import Button from '../../../../components/Button';
import SelectPaymentOption from './components/selectPaymentOption';
import SpecialInformation from './components/specialInformation';

export default function PaymentOption() {
	return (
		<div className="p-4 flex flex-col gap-4">
			<SelectPaymentOption />
			<SpecialInformation />
			<div className="mt-2 ">
				<Button className="w-full text-white">Place Order</Button>
			</div>
		</div>
	);
}
