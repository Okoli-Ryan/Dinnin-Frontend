import { Models } from "@rematch/core";

import { cart } from "./Cart";
import { error } from "./Error";
import { order } from "./Order";
import { restaurant } from "./Restaurant";
import { table } from "./Table";

export interface RootModel extends Models<RootModel> {
	restaurant: typeof restaurant;
	table: typeof table;
	cart: typeof cart;
	order: typeof order;
	error: typeof error;
}

export const models: RootModel = { restaurant, cart, order, error, table };
