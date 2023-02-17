export default function CheckoutPriceSummary() {
	return (
		<div className="flex flex-col gap-2 p-4 border-b-2">
			<div className="flex justify-between">
				<span className=" text-text_primary font-bold">Subtotal</span>
				<span className=" text-text_primary">$ 534.44</span>
			</div>
			<div className="flex justify-between">
				<span className=" text-text_primary font-bold">Taxes & fees</span>
				<span className=" text-text_primary">$3.44</span>
			</div>
			<div className="flex justify-between">
				<span className=" text-text_primary_bold font-bold">Total</span>
				<span className=" text-text_primary_bold font-bold">$ 537.88</span>
			</div>
		</div>
	);
}
