import { api as handleApi } from "../../../core/Axios";

export const RestaurantRepository = {
	getRestaurantDetails: (slug: string) =>
		//@ts-ignore
		handleApi.get(`restaurant/s/${slug}`, null),
};
