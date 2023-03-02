import { Outlet } from "react-router-dom";

import LoadingScreen from "../../components/LoadingScreen";
import { onFirebaseMessage } from "../../hooks";
import { useRestaurant } from "./useRestaurant";

export default function Restaurant() {
	const { loading } = useRestaurant();
	onFirebaseMessage();

	if (loading) return <LoadingScreen caption="Loading menu..." />;
	return <Outlet />;
}
