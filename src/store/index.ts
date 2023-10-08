import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

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

const sessionPersistPlugin = {
	key: siteSlug,
	storage: sessionStorage,
	whitelist: ["table"],
};

const store = init<RootModel, FullModel>({
	models: models,
	plugins: [loadingPlugin(), persistPlugin(persistConfig), persistPlugin(sessionPersistPlugin)],
});

export const { dispatch, getState } = store;
export type RootState = RematchRootState<RootModel, FullModel>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
