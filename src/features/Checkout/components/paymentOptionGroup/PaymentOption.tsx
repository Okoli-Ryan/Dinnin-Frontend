import Button from '../../../../components/Button';
import SelectPaymentOption from './components/selectPaymentOption';
import SpecialInformation from './components/specialInformation';
import { usePaymentOption } from "./usePaymentOption";

export default function PaymentOption() {
	const { handleOrderNote, handlePaymentOption, paymentOption, orderNote, createOrder, loading } =
		usePaymentOption();

	return (
		<div className="p-4 flex flex-col gap-4">
			<SelectPaymentOption
				handlePaymentOption={handlePaymentOption}
				paymentOption={paymentOption}
			/>
			<SpecialInformation orderNote={orderNote} handleOrderNote={handleOrderNote} />
			<Button loading={loading} onClick={createOrder} className="w-full text-white mt-2">
				Place Order
			</Button>
		</div>
	);
}
