import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import Checkout from "../../Checkout";
import Menu from "../../Menu";
import OrderSuccess from "../../OrderSuccess";

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
			element={
				// <Suspense fallback={<LoadingScreen />}>
				Component
				// </Suspense>
			}
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
		path: "/menu",
	},
	{
		Component: <OrderSuccess />,
		path: "/success",
	},
];
