import { api as handleApi } from "../../core/Axios";

export const RestaurantRepository = {
	getRestaurantDetails: (slug: string) => handleApi.get(`restaurant/s/${slug}`),
};
