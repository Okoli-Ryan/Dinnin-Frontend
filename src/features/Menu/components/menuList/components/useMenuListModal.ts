import { useAppSelector } from "../../../../../store";
import { useMenuListContext } from "../context";

export const useMenuListModal = () => {
	const { categories = [] } = useAppSelector((state) => state.restaurant);
	const { onChangeActiveTabKey, changeIsBottomSheetOpen, isBottomSheetOpen } =
		useMenuListContext();

	function closeBottomSheetModal() {
		changeIsBottomSheetOpen(false);
	}

	function selectMenuCategory(key: string) {
		onChangeActiveTabKey(key);
		changeIsBottomSheetOpen(false);
	}

	return { isBottomSheetOpen, selectMenuCategory, categories, closeBottomSheetModal };
};
