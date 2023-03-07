import { Input } from 'antd';

const { TextArea } = Input;

interface ISpecialInformation {
	handleOrderNote: (e: string) => void;
	orderNote: string;
}

export default function SpecialInformation({ handleOrderNote, orderNote }: ISpecialInformation) {
	return (
		<div className="flex flex-col">
			<p className="text-text_primary_bold font-lg font-bold">
				Special Instructions ( Optional )
			</p>
			<p className="text-sm text-[#12121299]">
				Please note that special requests may result in price adjustments after your order
				is processed.
			</p>
			<TextArea
				value={orderNote}
				onChange={(e) => handleOrderNote(e.target.value)}
				className="text-text_primary_bold bg-[#f2f4f5a6] border-0 mt-2"
				rows={6}
			/>
		</div>
	);
}
