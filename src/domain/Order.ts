import { IPaymentOption } from '../core/Constants';
import { ICartItem } from './CartItem';

export interface IOrder {
	orderNote: string;
	tableId?: string;
	userId?: string;
	paymentOption: IPaymentOption["value"];
	orderItems: ICartItem[];
	restaurantId: string;
}

export class Order {
	orderNote: string;
	paymentOption: IPaymentOption["value"];
	orderItems: ICartItem[];
	tableId?: string;
	userId?: string;
	restaurantId: string;

	constructor(props: IOrder) {
		this.tableId = props?.tableId;
		this.userId = props?.userId;
		this.orderItems = props.orderItems;
		this.orderNote = props.orderNote;
		this.paymentOption = props.paymentOption;
		this.restaurantId = props.restaurantId;
	}
}
