import { useCheckoutPriceSummary } from "./useCheckoutPriceSummary";

export default function CheckoutPriceSummary() {
	const { subTotal, total, fee } = useCheckoutPriceSummary();

	return (
		<div className="flex flex-col gap-2 p-4 border-b-2">
			<div className="flex justify-between">
				<span className=" text-text_primary font-bold">Subtotal</span>
				<span className=" text-text_primary">{subTotal}</span>
			</div>
			<div className="flex justify-between">
				<span className=" text-text_primary font-bold">Taxes & fees</span>
				<span className=" text-text_primary">{fee}</span>
			</div>
			<div className="flex justify-between">
				<span className=" text-text_primary_bold font-bold">Total</span>
				<span className=" text-text_primary_bold font-bold">{total}</span>
			</div>
		</div>
	);
}
