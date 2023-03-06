import { createContext, useContext } from "react";

export interface IMenuListContext {
	activeTabKey: string;
	onChangeActiveTabKey: (e: string) => void;
	isBottomSheetOpen: boolean;
	changeIsBottomSheetOpen: (e: boolean) => void;
}

export const MenuListContext = createContext({} as IMenuListContext);

export const useMenuListContext = () => useContext(MenuListContext);
