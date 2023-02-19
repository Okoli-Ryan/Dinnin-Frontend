import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Container from "../container";
import { AppRoutes, generateRoutes } from "./utils";

export default function RoutesConfig() {
	return (
		<Routes>
			<Route path="/" element={<Container />}>
				{AppRoutes.map((route, i) => (
					<Fragment key={i}>{generateRoutes(route, i)}</Fragment>
				))}
			</Route>
		</Routes>
	);
}
