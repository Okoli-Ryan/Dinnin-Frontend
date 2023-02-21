import { IMenuItem, MenuItem } from "./MenuItem";

export interface ICartItem extends IMenuItem {
	unit: number;
	categoryName: string;
}

export class CartItem extends MenuItem {
	unit: number;
	categoryName: string;

	constructor(props: ICartItem) {
		super(props);
		this.unit = 1;
		this.categoryName = props.categoryName;
	}
}
