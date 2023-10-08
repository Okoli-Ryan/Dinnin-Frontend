import { lazy, ReactElement, Suspense } from "react";
import { Route } from "react-router-dom";

import LoadingScreen from "../../../components/LoadingScreen";
import Checkout from "../../Checkout";
import Menu from "../../Menu";

const loadModules = (link: string) => lazy(() => import(/* @vite-ignore */ `../../${link}`));

export const generateRoutes = (
	{ path, Component }: IAppRoute,
	i: any,
	prefix?: string
): ReactElement => {
	return (
		<Route
			key={i}
			path={prefix + path}
			element={<Suspense fallback={<LoadingScreen />}>{Component}</Suspense>}
		/>
	);
};
interface IAppRoute {
	path: string;
	Component: any;
}

export const AppRoutes: Array<IAppRoute> = [
	{
		Component: <Checkout />,
		path: "/checkout",
	},
	{
		Component: <Menu />,
		path: "/",
	},
];
