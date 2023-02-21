import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Restaurant from "../Restaurant";
import { AppRoutes, generateRoutes } from "./utils";

export default function RoutesConfig() {
	return (
		<Routes>
			<Route path="/:slug" element={<Restaurant />}>
				{AppRoutes.map((route, i) => (
					<Fragment key={i}>{generateRoutes(route, i, "/:slug")}</Fragment>
				))}
			</Route>
		</Routes>
	);
}
