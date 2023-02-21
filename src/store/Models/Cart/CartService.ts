import { createModel } from "@rematch/core";

import { RootModel } from "../";
import { ICartItem } from "../../../domain/CartItem";

const initState = {} as Record<string, ICartItem>;

type IGetRestaurantPayload = {
	slug: string;
	tableId?: string;
};

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
		increaseUnit(state, menuItemId: string) {
			if (state[menuItemId]) {
				const newState = { ...state };
				newState[menuItemId].unit += 1;

				return newState;
			}
		},
		decreaseUnit(state, menuItemId: string) {
			if (state[menuItemId] && state[menuItemId].unit > 0) {
				const newState = { ...state };
				newState[menuItemId].unit -= 1;

				return newState;
			}
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
