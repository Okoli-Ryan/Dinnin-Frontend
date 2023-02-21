import List from "../../../../components/List";
import { TabItemType } from "../../../../domain/AntDTab";
import { IMenuCategory } from "../../../../domain/MenuCategogy";
import MenuItem from "../menuItem";

export const ParseMenuCategories = (categories: IMenuCategory[]) =>
	categories.map(
		(category, key) =>
			new TabItemType({
				children: (
					<List
						data={category.menuItems}
						renderItem={(item) => (
							<MenuItem {...item} unit={1} categoryName={category.categoryName} />
						)}
					/>
				),
				label: category.categoryName,
				key: category.id,
			})
	);
