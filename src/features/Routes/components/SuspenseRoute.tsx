import { Suspense } from "react";
import { Route } from "react-router-dom";

import LoadingScreen from "../../../components/LoadingScreen";

interface IRoute {
	Component: any;
	path: string;
}

export default function SuspenseRoute({ Component, path }: IRoute) {
	return (
		<Route
			path={path}
			element={<Suspense fallback={<LoadingScreen />}>{Component}</Suspense>}
		/>
	);
}
