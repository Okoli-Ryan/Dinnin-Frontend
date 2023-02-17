import { CartItem } from '../../../../domain/CartItem';

const cartListArray = [
	"Food 1",
	"Food 2",
	"Food 3",
	"Food 4",
	"Food 1",
	"Food 2",
	"Food 3",
	"Food 4",
	"Food 1",
	"Food 2",
	"Food 3",
	"Food 4",
];
export const Dummy__CartList = cartListArray.map(
	(el, id) =>
		new CartItem({
			id: `${id}`,
			menuItemName: el,
		})
);
