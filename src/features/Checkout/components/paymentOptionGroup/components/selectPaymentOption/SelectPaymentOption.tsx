import Button from '../../../../../../components/Button';
import { IPaymentOption, PAYMENT_OPTIONS } from "../../../../../../core/Constants";

interface ISelectPaymentOption {
	handlePaymentOption: (e: IPaymentOption) => void;
	paymentOption: IPaymentOption;
}

export default function SelectPaymentOption({
	handlePaymentOption,
	paymentOption,
}: ISelectPaymentOption) {
	return (
		<div className="flex flex-col gap-2">
			<span className=" text-text_primary_bold font-bold">Payment option</span>
			<div className="flex justify-between">
				{PAYMENT_OPTIONS.map((option) => (
					<Button
						key={option.value}
						onClick={() => handlePaymentOption(option)}
						size="middle"
						className={`font-normal ${
							option.value === paymentOption.value ? "text-white" : "text-primary"
						} items-center flex px-2`}
						type={option.value === paymentOption.value ? "primary" : "default"}>
						{option.label}
					</Button>
				))}
			</div>
		</div>
	);
}
