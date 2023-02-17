import { Input } from 'antd';

const { TextArea } = Input;

export default function SpecialInformation() {
	return (
		<TextArea
			className="text-text_primary_bold bg-[#F2F4F5]"
			rows={6}
			placeholder="Special information (optional)"
		/>
	);
}
