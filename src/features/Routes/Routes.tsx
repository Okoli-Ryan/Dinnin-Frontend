import { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import OrderSuccess from '../OrderSuccess';
import Restaurant from '../Restaurant';
import Route404 from '../Route404';
import { AppRoutes, generateRoutes } from './utils';

export default function RoutesConfig() {
	const { pathname } = useLocation();

	return (
		<Routes key={pathname}>
			<Route path="/:slug" element={<Restaurant />}>
				{AppRoutes.map((route, i) => (
					<Fragment key={i}>{generateRoutes(route, i, "/:slug")}</Fragment>
				))}
			</Route>
			<Route path="/:slug/status/:orderId" element={<OrderSuccess />} />
			<Route path="*" element={<Route404 />} />
		</Routes>
	);
}
