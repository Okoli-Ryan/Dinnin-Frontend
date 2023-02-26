import { parseCurrency } from "../../../../core/Utils";
import { ICartItem } from "../../../../domain/CartItem";

interface ICheckoutItem {
	index: number;
	category: string;
	menuItems: ICartItem[];
}

export default function CheckoutItem({ category, index, menuItems }: ICheckoutItem) {
	const subTotal = menuItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

	return (
		<div className="flex justify-between py-2">
			<div className="flex gap-4">
				<span>{index}</span>
				<div className="flex flex-col gap-2">
					<p className="font-bold text-text_primary_bold">{category}</p>
					<div className="flex flex-col gap-1">
						{menuItems.map((menuItem) => (
							<p key={menuItem.id} className="text-text_primary text-sm">
								{menuItem.menuItemName} x{menuItem.quantity}
							</p>
						))}
					</div>
				</div>
			</div>
			<p className="text-text_primary font-lg">{parseCurrency(subTotal)}</p>
		</div>
	);
}
