import { ChangeEvent, useDeferredValue, useState } from "react";

import { useAppSelector } from "../../../../store";
import { filterCategories, ParseMenuCategories } from "./Utils";

export const useMenuList = () => {
	const [searchValue, setSearchValue] = useState("");

	const { categories = [] } = useAppSelector((state) => state.restaurant);

	function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value);
	}

	const filteredCategories = useDeferredValue(filterCategories(searchValue, categories));
	const categoryTabs = ParseMenuCategories(filteredCategories);

	return { categoryTabs, searchValue, onChangeSearch };
};
