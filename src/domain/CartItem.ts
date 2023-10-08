import { IMenuItem, MenuItem } from "./MenuItem";

export interface ICartItem extends IMenuItem {
	quantity: number;
	categoryName: string;
	itemPrice: number;
	menuItemName: string;
}

export class CartItem extends MenuItem {
	quantity: number;
	categoryName: string;
	itemPrice: number;

	constructor(props: ICartItem) {
		super(props);
		this.quantity = 1;
		this.categoryName = props.categoryName;
		this.menuItemName = props.menuItemName;
		this.itemPrice = props.itemPrice;
	}
}
