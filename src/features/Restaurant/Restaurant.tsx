import { Outlet } from "react-router-dom";

import LoadingScreen from "../../components/LoadingScreen";
import { useRestaurant } from "./useRestaurant";

export default function Restaurant() {
	const { loading } = useRestaurant();

	if (loading) return <LoadingScreen />;
	return <Outlet />;
}
