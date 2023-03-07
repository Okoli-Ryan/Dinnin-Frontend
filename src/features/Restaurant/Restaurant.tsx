import { Outlet } from "react-router-dom";

import LoadingScreen from "../../components/LoadingScreen";
import { initiatePushNotification } from "../../services/PushNotification";
import { useRestaurant } from "./useRestaurant";

export default function Restaurant() {
	const { loading } = useRestaurant();
	initiatePushNotification();

	if (loading) return <LoadingScreen caption="Loading menu..." />;
	return <Outlet />;
}
