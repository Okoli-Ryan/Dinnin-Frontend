import { createModel } from "@rematch/core";

import { RootModel } from "../";
import { IRestaurant } from "../../../domain/Restaurant";
import { RestaurantRepository } from "./RestaurantRepository";

const initState = {} as IRestaurant;

export const restaurant = createModel<RootModel>()({
	state: initState,
	reducers: {
		set(state, payload) {
			return {
				...state,
				...payload,
			};
		},
	},
	effects: (dispatch) => ({
		async getRestaurant(slug, rootState) {
			try {
				const data = await RestaurantRepository.getRestaurantDetails(slug);
				dispatch.restaurant.set(data);
			} catch (e: any) {
				dispatch.error.setError({
					message: "Unable to get restaurant",
				});
			}
		},
	}),
});
