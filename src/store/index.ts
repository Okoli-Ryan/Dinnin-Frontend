import { init } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";

import { models, RootModel } from "./Models";

// import { persistStorage } from '../persist';

type FullModel = ExtraModelsFromLoading<RootModel>;

const store = init<RootModel, FullModel>({
	models: models,
	plugins: [loadingPlugin()],
});

export const { dispatch, getState } = store;

export default store;
