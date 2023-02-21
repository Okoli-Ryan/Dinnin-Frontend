import { Outlet } from 'react-router-dom';

import LoadingScreen from "../../components/LoadingScreen";
import { useContainer } from "./useContainer";

export default function Container() {

    const { loading } = useContainer();

	if (loading) return <LoadingScreen />;
	return <Outlet />;
}
