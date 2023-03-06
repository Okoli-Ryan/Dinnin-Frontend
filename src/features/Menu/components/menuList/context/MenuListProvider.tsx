import { Provider, useState } from "react";

import { useAppSelector } from "../../../../../store";
import { MenuListContext } from "./MenuListContext";

interface IMenuListProviderProps {
	children: JSX.Element;
}

export const MenuListProvider = ({ children }: IMenuListProviderProps) => {
	const { categories } = useAppSelector((state) => state.restaurant);
	const [activeTabKey, setActiveTabKey] = useState(categories?.[0].id || "1");
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

	const onChangeActiveTabKey = (key: string) => {
		setActiveTabKey(key);
	};

	const changeIsBottomSheetOpen = (e: boolean) => {
		setIsBottomSheetOpen(e);
	};

	return (
		<MenuListContext.Provider
			value={{
				activeTabKey,
				onChangeActiveTabKey,
				changeIsBottomSheetOpen,
				isBottomSheetOpen,
			}}>
			{children}
		</MenuListContext.Provider>
	);
};
