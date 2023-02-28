import { AnimatePresence } from "framer-motion";
import { PersistGate } from "redux-persist/lib/integration/react";

import { getPersistor } from "@rematch/persist";

import RoutesConfig from "./features/Routes";

export default function App() {
	const persistor = getPersistor();

	return (
		<PersistGate persistor={persistor}>
			<AnimatePresence mode="wait">
				<RoutesConfig />
			</AnimatePresence>
		</PersistGate>
	);
}
