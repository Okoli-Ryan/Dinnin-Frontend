import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from "react-router-dom";

import { dispatch } from '../../store';

export const useRestaurant = () => {
	const [searchParams] = useSearchParams();
	const { slug = "" } = useParams();
	const code = searchParams.get("code");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchRestaurantDetails() {
			setIsLoading(true);

			if (code) {
				//Query by table id and fill redux table and restaurant states
				await dispatch.table.getTableDetails(code);
			}
			//TODO handle user choosing table if table code is absent
			// } else {
			// 	//Query by slug and fill restaurant state
			// 	await dispatch.restaurant.getRestaurant(slug);
			// }

			setIsLoading(false);
		}

		fetchRestaurantDetails();
	}, []);

	return { loading: isLoading };
};
