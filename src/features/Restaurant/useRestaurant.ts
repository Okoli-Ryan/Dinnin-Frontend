import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { dispatch } from '../../store';

export const useRestaurant = () => {
	const { slug = "" } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	// const loading = useAppSelector((state: RootState) => state.loading.global);

	useEffect(() => {
		async function fetchRestaurantDetails() {
			setIsLoading(true);
			await dispatch.restaurant.getRestaurant({ slug });
			setIsLoading(false);
		}

		fetchRestaurantDetails();

		// return () => controller.abort();
	}, []);

	return { loading: isLoading };
};
