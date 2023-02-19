import { Models } from "@rematch/core";

import { restaurant } from "./Restaurant";

export interface RootModel extends Models<RootModel> {
	restaurant: typeof restaurant;
}

export const models: RootModel = { restaurant };
