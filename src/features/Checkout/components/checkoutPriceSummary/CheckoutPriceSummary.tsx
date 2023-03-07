import { Input } from "antd";
import { AiFillTag } from "react-icons/ai";

import Button from "../../../../components/Button";
import { useCheckoutPriceSummary } from "./useCheckoutPriceSummary";

export default function CheckoutPriceSummary() {
	const { subTotal, total, fee } = useCheckoutPriceSummary();

	return (
		<div className="flex flex-col">
			<div className="border-b-2 flex justify-between gap-4 items-center relative">
				<Input
					className="flex flex-1 w-full border-0 !bg-transparent p-3 !pl-12 pr-4 hover:border-none rounded-none placeholder:text-black font-bold active:border-0 focus:border"
					placeholder="Add promo code"
				/>
				<AiFillTag className="absolute top-4 left-4" />
				<Button shape="default" size="small" className="mr-4 !px-6">
					APPLY
				</Button>
			</div>
			<div className="flex flex-col gap-2 p-4 border-b-2">
				<div className="flex justify-between">
					<span className=" text-text_primary">Subtotal</span>
					<span className=" text-text_primary">{subTotal}</span>
				</div>
				<div className="flex justify-between">
					<span className=" text-text_primary">Taxes & fees</span>
					<span className=" text-text_primary">{fee}</span>
				</div>
				<div className="flex justify-between">
					<span className=" text-text_primary_bold font-bold">Total</span>
					<span className=" text-text_primary_bold font-bold">{total}</span>
				</div>
			</div>
		</div>
	);
}
