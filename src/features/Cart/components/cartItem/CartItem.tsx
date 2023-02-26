import FoodImage from "../../../../components/Image/FoodImage";
import { ICartItem } from "../../../../domain/CartItem";
import CartItemCountComponent from "./CartItemCountComponent";

export default function CartItem(props: ICartItem) {
	return (
		<div className="flex justify-between items-center p-4 gap-4">
			<div className="flex items-center gap-2 w-3/5">
				<FoodImage src={props.imageUrl} className="w-10 h-10" />
				<div className="flex flex-col gap-2 max-w-[calc(100%-40px)]">
					<p className="font-bold text-xs text-[#121212E5] truncate max-w-[100%]">
						{props.menuItemName}
					</p>
					<p className="text-xs">NGN {props.price}</p>
				</div>
			</div>
			<CartItemCountComponent id={props.id} />
		</div>
	);
}
