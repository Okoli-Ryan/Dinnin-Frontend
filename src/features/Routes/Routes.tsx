import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Restaurant from "../Restaurant";
import { AppRoutes, generateRoutes } from "./utils";

export default function RoutesConfig() {
	const { pathname } = useLocation();

	return (
		<Routes key={pathname}>
			<Route path="/:slug" element={<Restaurant />}>
				{AppRoutes.map((route, i) => (
					<Fragment key={i}>{generateRoutes(route, i, "/:slug")}</Fragment>
				))}
			</Route>
		</Routes>
	);
}
