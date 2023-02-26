import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";

import { init, RematchRootState } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import persistPlugin from "@rematch/persist";

import { models, RootModel } from "./Models";

// import { persistStorage } from '../persist';

type FullModel = ExtraModelsFromLoading<RootModel>;

export const siteSlug = window.location.pathname.split("/")?.[1] || "default";

const persistConfig = {
	key: siteSlug,
	storage,
	whitelist: ["order", "cart"],
};

const store = init<RootModel, FullModel>({
	models: models,
	plugins: [loadingPlugin(), persistPlugin(persistConfig)],
});

export const { dispatch, getState } = store;
export type RootState = RematchRootState<RootModel, FullModel>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
