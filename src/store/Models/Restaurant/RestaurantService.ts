import { createModel } from "@rematch/core";

import { RootModel } from "../";
import { IRestaurant } from "../../../domain/Restaurant";
import { RestaurantRepository } from "./RestaurantRepository";

const initState = {} as IRestaurant;

type IGetRestaurantPayload = {
	slug: string;
	tableId?: string;
};

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
		async getRestaurant(payload: IGetRestaurantPayload, rootState) {
			const { slug } = payload;

			console.log(payload);

			try {
				const data = await RestaurantRepository.getRestaurantDetails(slug);
				console.log("fetched");
				dispatch.restaurant.set(data);
			} catch (e: any) {
				dispatch.error.setError({
					message: "Unable to get restaurant",
				});
			}
		},
	}),
});
