import List from "../../../../components/List";
import { TabItemType } from "../../../../domain/AntDTab";
import { IMenuCategory } from "../../../../domain/MenuCategogy";
import { useAppSelector } from "../../../../store";
import MenuItem from "../menuItem";

export const ParseMenuCategories = (categories: IMenuCategory[]) =>
	categories.map(
		(category, key) =>
			new TabItemType({
				children: (
					<List
						data={category.menuItems}
						renderItem={(item) => (
							<MenuItem {...item} quantity={1} categoryName={category.categoryName} />
						)}
					/>
				),
				label: (
					<Label categoryName={category.categoryName} count={category.menuItems.length} />
				),
				key: category.id,
			})
	);

const Label = ({ categoryName, count }: { categoryName: string; count: number }) => {
	const cart = useAppSelector((state) => state.cart);
	const cartItems = Object.values(cart);

	const hasItem = cartItems.find((el) => el.categoryName === categoryName);

	return (
		<span className="relative">
			<span>
				{categoryName} ({count})
			</span>
			{hasItem && (
				<div className="absolute z-10 w-2 h-2 rounded-full bg-primary -top-1 -right-2"></div>
			)}
		</span>
	);
};

export const filterCategories = (searchValue: string, categories: IMenuCategory[]) => {
	const newCategories = categories
		.map((category) => ({
			...category,
			menuItems: category.menuItems.filter((item) =>
				item.menuItemName.toLowerCase().includes(searchValue.toLowerCase())
			),
		}))
		.filter((category) => category.menuItems.length > 0);

	return newCategories as IMenuCategory[];
};
