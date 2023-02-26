import { IMenuItem, MenuItem } from "./MenuItem";

export interface ICartItem extends IMenuItem {
	quantity: number;
	categoryName: string;
}

export class CartItem extends MenuItem {
	quantity: number;
	categoryName: string;

	constructor(props: ICartItem) {
		super(props);
		this.quantity = 1;
		this.categoryName = props.categoryName;
	}
}
