import Button from '../../../../../../components/Button';

export default function SelectPaymentOption() {
	return (
		<div className="flex flex-col gap-2">
			<span className=" text-text_primary_bold font-bold">Payment option</span>
			<div className="flex justify-between">
				<Button size="middle" className="font-normal text-white items-center flex px-2">
					Pay with Cash
				</Button>
				<Button size="middle" className="font-normal text-white items-center flex px-2">
					POS
				</Button>
				<Button size="middle" className="font-normal text-white items-center flex px-2">
					Online Payment
				</Button>
			</div>
		</div>
	);
}
