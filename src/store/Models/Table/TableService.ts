import { createModel } from "@rematch/core";

import { RootModel } from "../";
import { ITable } from "../../../domain/Table";
import { TableRepository } from "./TableRepository";

const initState = {} as ITable;

export const table = createModel<RootModel>()({
	state: initState,
	reducers: {
		set(state, payload) {
			return payload;
		},
	},
	effects: (dispatch) => ({
		async getTableDetails(code: string) {
			try {
				const data = await TableRepository.getTableDetails(code);

				const { restaurant, ...otherTableFields } = data;

				dispatch.table.set(otherTableFields);
				dispatch.restaurant.set(restaurant);
			} catch (e: any) {
				dispatch.error.setError({
					message: "Unable to get restaurant",
				});
			}
		},
	}),
});
