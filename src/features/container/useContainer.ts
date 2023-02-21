import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { dispatch, RootState, useAppSelector } from "../../store";

export const useContainer = () => {
	const { slug = "" } = useParams();
	const loading = useAppSelector((state: RootState) => state.loading.global);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		dispatch.restaurant.getRestaurant({ slug, signal });

		return () => controller.abort();
	}, []);

	return { loading };
};
