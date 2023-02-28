import FoodImage from "../../../../components/Image/FoodImage";
import { ICartItem } from "../../../../domain/CartItem";
import { useMenuItem } from "./useMenuItem";

export default function MenuItem(props: ICartItem & { index: number }) {
	const { selectMenuItem, isSelected } = useMenuItem(props);

	return (
		<div
			// transition={{
			// 	delay: props.index * 0.1,
			// 	duration: 0.3,
			// }}
			// initial={{
			// 	x: "100vw",
			// 	opacity: 0,
			// }}
			// animate={{
			// 	x: 0,
			// 	opacity: 1,
			// }}
			className={`flex justify-between px-4 gap-4 mb-2 transition-colors duration-200 border-b-[1px] py-3 ${
				isSelected ? "bg-primary/10" : "bg-white"
			}`}
			onClick={selectMenuItem}>
			<div className="flex flex-col gap-1 ">
				<h5 className="font-bold">{props.menuItemName}</h5>
				<p className="text-sm text-text_primary">{props.description}</p>
				<p className="font-bold mt-2">NGN {props.price}</p>
			</div>
			<div className="relative flex self-center">
				<FoodImage src={props.imageUrl} />
				{/* <span className="absolute shadow-lg bottom-0 right-0 w-6 h-6 flex justify-center items-center rounded-full bg-white">
					{isSelected ? (
						<BsCheckCircleFill size={14} className="text-primary" />
					) : (
						<AiOutlinePlus size={14} color="#121212" />
					)}
				</span> */}
			</div>
		</div>
	);
}
