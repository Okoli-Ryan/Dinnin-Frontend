import { GenericAbortSignal } from "axios";

import { Models } from "@rematch/core";

import { restaurant } from "./Restaurant/RestaurantService";

export interface RootModel extends Models<RootModel> {
	restaurant: typeof restaurant;
}

export type WithAbortSignal<T> = T & { signal: GenericAbortSignal };

export const models: RootModel = { restaurant };
