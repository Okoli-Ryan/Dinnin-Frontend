import { Input } from 'antd';

const { TextArea } = Input;

interface ISpecialInformation {
	handleOrderNote: (e: string) => void;
	orderNote: string;
}

export default function SpecialInformation({ handleOrderNote, orderNote }: ISpecialInformation) {
	return (
		<TextArea
			value={orderNote}
			onChange={(e) => handleOrderNote(e.target.value)}
			className="text-text_primary_bold bg-[#F2F4F5]"
			rows={6}
			placeholder="Special information (optional)"
		/>
	);
}
