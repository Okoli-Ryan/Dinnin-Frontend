import { TypedUseSelectorHook, useSelector } from "react-redux";

import { init, RematchRootState } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";

import { models, RootModel } from "./Models";

// import { persistStorage } from '../persist';

type FullModel = ExtraModelsFromLoading<RootModel>;

const store = init<RootModel, FullModel>({
	models: models,
	plugins: [loadingPlugin()],
});

export const { dispatch, getState } = store;
export type RootState = RematchRootState<RootModel, FullModel>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
