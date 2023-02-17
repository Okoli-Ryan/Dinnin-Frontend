import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CartItemCountComponent() {
	return (
		<div className="flex rounded-full border-2 items-center">
			<button className="p-[2px] px-2">
				<AiOutlineMinus size={14} className="text-primary" />
			</button>
			<span className="p-2 text-xs">1</span>
			<button className="p-[2px] px-2">
				<AiOutlinePlus size={14} className="text-primary" />
			</button>
		</div>
	);
}
