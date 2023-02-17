import { IMenuItem, MenuItem } from "./MenuItem";

export interface ICartItem extends IMenuItem {}

export class CartItem extends MenuItem {
	unit: number;

	constructor(props: ICartItem) {
		super(props);
		this.unit = 1;
	}
}
