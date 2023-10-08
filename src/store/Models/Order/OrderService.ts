import { createModel } from "@rematch/core";

import { RootModel } from "../";
import { IMakeOrder, MakeOrder } from "../../../domain/MakeOrder";
import { IOrder } from "../../../domain/Order";
import { OrderRepository } from "./OrderRepository";

const initState = [] as IMakeOrder[];

export const order = createModel<RootModel>()({
	state: initState,
	reducers: {
		addOrder(state, payload) {
			return [payload, ...state];
		},
	},
	effects: (dispatch) => ({
		async createOrder(payload: IOrder, rootState) {
			const orderItems = payload.orderItems.map((item) => ({
				quantity: item.quantity,
				menuItemId: item.id,
				orderId: item.id,
			}));

			const { orderItems: items, ...orderPayload } = payload;

			const orderRequestPayload = new MakeOrder({
				order: orderPayload,
				orderItems,
			});

			try {
				const data = await OrderRepository.createOrder(orderRequestPayload);
				dispatch.order.addOrder(data);
				dispatch.cart.clear();
				return data.order.id!;
			} catch (e: any) {
				dispatch.error.setError({
					message: "Unable to create order",
				});
				return null;
			}
		},
	}),
});
