import { createModel } from "@rematch/core";

import { RootModel } from "../";
import { ICartItem } from "../../../domain/CartItem";

const initState = {} as Record<string, ICartItem>;

export const cart = createModel<RootModel>()({
	state: initState,
	reducers: {
		select(state, payload: ICartItem) {
			if (state[payload.id]) {
				const newState = { ...state };
				delete newState[payload.id];
				return newState;
			}

			return {
				...state,
				[payload.id]: payload,
			};
		},
		increaseQuantity(state, menuItemId: string) {
			if (state[menuItemId]) {
				const newState = { ...state };
				newState[menuItemId].quantity += 1;

				return newState;
			}
		},
		removeCartItem(state, menuItemId: string) {
			const newState = { ...state };

			delete newState[menuItemId];
			return newState;
		},
		decreaseQuantity(state, menuItemId: string) {
			const newState = { ...state };
			if (newState[menuItemId].quantity === 1) {
				delete newState[menuItemId];
				return newState;
			}

			newState[menuItemId].quantity -= 1;

			return newState;
		},
		clear() {
			return initState;
		},
	},
	// effects: (dispatch) => ({
	// 	async getRestaurant(payload: IGetRestaurantPayload, rootState) {
	// 		const { slug } = payload;

	// 		console.log(payload);

	// 		try {
	// 			const data = await RestaurantRepository.getRestaurantDetails(slug);
	// 			console.log("fetched");
	// 			dispatch.restaurant.set(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	},
	// }),
});
