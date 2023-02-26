import { createModel } from "@rematch/core";
import { RootModel } from "..";

const initState = { message: null, cb: () => {} };

export const error = createModel<RootModel>()({
	state: initState,
	reducers: {
		setError(state, payload) {
			return payload;
		},
		clearError() {
			return initState;
		},
	},
});
