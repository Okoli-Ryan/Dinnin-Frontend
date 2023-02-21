import { GenericAbortSignal } from "axios";

import { api as handleApi } from "../../../core/Axios";

export const RestaurantRepository = {
	getRestaurantDetails: (slug: string, signal: GenericAbortSignal) =>
		//@ts-ignore
		handleApi.get(`restaurant/s/${slug}`, null, signal),
};
