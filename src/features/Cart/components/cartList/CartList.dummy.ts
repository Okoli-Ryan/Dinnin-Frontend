import { CartItem } from '../../../../domain/CartItem';

const cartListArray = [
	{ menuItemName: "Food 1", category: "Category 1" },
	{ menuItemName: "Food 2", category: "Category 2" },
	{ menuItemName: "Food 3", category: "Category 1" },
	{ menuItemName: "Food 4", category: "Category 2" },
	{ menuItemName: "Food 5", category: "Category 2" },
	{ menuItemName: "Food 2", category: "Category 2" },
	{ menuItemName: "Food 3", category: "Category 1" },
	{ menuItemName: "Food 4", category: "Category 2" },
	{ menuItemName: "Food 5", category: "Category 2" },
	{ menuItemName: "Food 2", category: "Category 2" },
	{ menuItemName: "Food 3", category: "Category 1" },
	{ menuItemName: "Food 4", category: "Category 2" },
	{ menuItemName: "Food 5", category: "Category 2" },
];
export const Dummy__CartList = cartListArray.map(
	(el, id) =>
		new CartItem({
			id: `${id}`,
			menuItemName: el.menuItemName,
			category: el.category,
		})
);
