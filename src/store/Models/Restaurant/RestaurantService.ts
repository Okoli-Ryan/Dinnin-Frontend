import { createModel } from "@rematch/core";

import { RootModel, WithAbortSignal } from "../";
import { IRestaurant } from "../../../domain/Restaurant";
import { RestaurantRepository } from "./RestaurantRepository";

const initState = {} as IRestaurant;

type IGetRestaurantPayload = WithAbortSignal<{
	slug: string;
	tableId?: string;
}>;

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
			const { slug, signal } = payload;

			console.log(payload);

			try {
				const data = await RestaurantRepository.getRestaurantDetails(slug, signal);
				console.log("fetched");
				dispatch.restaurant.set(data);
			} catch (error) {
				console.log(error);
			}
		},
	}),
});
