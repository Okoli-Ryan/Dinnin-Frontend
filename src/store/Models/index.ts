import { Models } from "@rematch/core";

import { cart } from "./Cart";
import { restaurant } from "./Restaurant";

export interface RootModel extends Models<RootModel> {
	restaurant: typeof restaurant;
	cart: typeof cart;
}

export const models: RootModel = { restaurant, cart };
