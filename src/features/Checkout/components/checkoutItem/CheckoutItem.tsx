import { ICartItem } from "../../../../domain/CartItem";

interface ICheckoutItem {
	index: number;
	category: string;
	menuItems: ICartItem[];
}

export default function CheckoutItem({ category, index, menuItems }: ICheckoutItem) {
	return (
		<div className="flex justify-between mb-4">
			<div className="flex gap-4">
				<span>{index}</span>
				<div className="flex flex-col gap-2">
					<p className="font-bold text-text_primary_bold">{category}</p>
					<div className="flex flex-col gap-1">
						{menuItems.map((menuItem) => (
							<p className="text-text_primary text-sm">
								{menuItem.menuItemName} x{menuItem.unit}
							</p>
						))}
					</div>
				</div>
			</div>
			<p className="text-text_primary font-lg">$ 45.44</p>
		</div>
	);
}
