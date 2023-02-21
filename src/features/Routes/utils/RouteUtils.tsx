import { lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { Route } from 'react-router-dom';

import LoadingScreen from '../../../components/LoadingScreen';

const loadModules = (link: string) => lazy(() => import(/* @vite-ignore */`../../${link}`));

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
				<Suspense fallback={<LoadingScreen />}>
					<Component />
				</Suspense>
			}
		/>
	);
};
interface IAppRoute {
	path: string;
	Component: LazyExoticComponent<any>;
}

export const AppRoutes: Array<IAppRoute> = [
	{
		Component: loadModules("Checkout"),
		path: "/checkout",
	},
	{
		Component: loadModules("Menu"),
		path: "/menu",
	},
];
