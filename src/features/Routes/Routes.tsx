import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Container from "../container";
import Menu from "../Menu";
import { AppRoutes, generateRoutes } from "./utils";

export default function RoutesConfig() {
	return (
		<Routes>
			<Route path="/:slug" element={<Container />}>
				<Route path="/:slug/menu" element={<Menu />} />
				{AppRoutes.map((route, i) => (
					<Fragment key={i}>{generateRoutes(route, i, "/:slug")}</Fragment>
				))}
			</Route>
		</Routes>
	);
}
