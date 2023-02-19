import { IMenuCategory } from "./MenuCategogy";

export interface IRestaurant {
	id: string;
	activeStatus: boolean;
	createdAt: Date;
	updatedAt: Date;
	restaurantName: string;
	slug: string;
	description: string;
	xCoordinate: number;
	yCoordinate: number;
	address: string;
	contactPhoneNumber: string;
	contactEmail: string;
	logoUrl: string;
	country: string;
	state: string;
	city: string;
	categories: IMenuCategory[];
}
