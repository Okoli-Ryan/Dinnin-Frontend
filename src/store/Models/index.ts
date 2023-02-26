import { Models } from "@rematch/core";

import { cart } from "./Cart";
import { order } from "./Order";
import { restaurant } from "./Restaurant";
import { error } from "./Error";

export interface RootModel extends Models<RootModel> {
	restaurant: typeof restaurant;
	cart: typeof cart;
	order: typeof order;
    error: typeof error
}

export const models: RootModel = { restaurant, cart, order, error };
