import { createModel } from "@rematch/core";

import { IRestaurant } from "../../domain/Restaurant";
import { RootModel } from "./";
import { RestaurantRepository } from "./RestaurantRepository";

const initState: IRestaurant | null = null;

export const restaurant = createModel<RootModel>()({
	state: initState,
	reducers: {
		set(state, payload) {
			return payload;
		},
	},
	effects: (dispatch) => ({
		async getRestaurant(payload: Record<"slug", string>, rootState) {
			const { slug } = payload;

			try {
				const data = await RestaurantRepository.getRestaurantDetails(slug);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		},
	}),
});
