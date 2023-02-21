import List from "../../../../../components/List";
import { TabItemType } from "../../../../../domain/AntDTab";
import { IMenuCategory } from "../../../../../domain/MenuCategogy";
import OrderMenuItem from "../../menuItem";

export const ParseMenuCategories = (categories: IMenuCategory[]) =>
	categories.map(
		(category, key) =>
			new TabItemType({
				children: (
					<List
						data={category.menuItems}
						renderItem={(item) => <OrderMenuItem {...item} />}
					/>
				),
				label: category.categoryName,
				key: category.id,
			})
	);
