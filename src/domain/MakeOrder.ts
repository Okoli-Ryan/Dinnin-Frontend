import { ICartItem } from './CartItem';
import { IOrder } from './Order';

export interface IMakeOrder {
	order: Partial<IOrder>;
	orderItems: Array<Partial<ICartItem>>;
}

export class MakeOrder {
	order: Partial<IOrder>;
	orderItems: Array<Partial<ICartItem>>;

	constructor(props: IMakeOrder) {
		this.order = props.order;
		this.orderItems = props.orderItems;
	}
}
