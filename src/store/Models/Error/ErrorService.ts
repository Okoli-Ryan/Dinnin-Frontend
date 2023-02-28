import { createModel } from "@rematch/core";

import { RootModel } from "../";

const initState = {
	message: "",
	cb: () => {},
	hasCustomCallback: false,
	show: false,
	customButtonText: "",
};

export const error = createModel<RootModel>()({
	state: initState,
	reducers: {
		setError(state, payload: Partial<typeof initState>) {
			return { ...state, show: true, ...payload };
		},
		clearError(state) {
			return { ...state, show: false };
		},
	},
});
