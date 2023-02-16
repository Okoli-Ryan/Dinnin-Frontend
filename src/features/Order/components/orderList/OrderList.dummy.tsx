import DummyFood from '../../../../assets/images/DummyFood.png';
import List from '../../../../components/List';
import { TabItemType } from '../../../../domain/AntDTab';
import { MenuItem } from '../../../../domain/MenuItem';
import OrderMenuItem from '../orderMenuItem';

const Dummy__MostPopular = [
	new MenuItem({
		id: "1",
		menuItemName: "Food 1",
        imageSrc: DummyFood,
        description: "Grilled medium & finished with our chimichurri sauce, served with white rice and sautéed vegetables , substitute asana lime and ginger sauce."
	}),
	new MenuItem({
		id: "2",
		menuItemName: "Food 1",
        imageSrc: DummyFood,
        description: "Fried potatoes with plantain and a side of chicken"
	}),
	new MenuItem({
		id: "3",
		menuItemName: "Food 1",
        imageSrc: DummyFood,
        description: "Pancakes with caramel syrup, and eggs with a glass of water"
	}),
	new MenuItem({
		id: "4",
		menuItemName: "Food 1",
        imageSrc: DummyFood,
        description: "Grilled medium & finished with our chimichurri sauce, served with white rice and sautéed vegetables , substitute asana lime and ginger sauce."
	}),
	new MenuItem({
		id: "5",
		menuItemName: "Food 1",
        imageSrc: DummyFood,
        description: "Fried potatoes with plantain and a side of chicken"
	}),
	new MenuItem({
		id: "6",
		menuItemName: "Food 1",
        imageSrc: DummyFood,
        description: "Pancakes with caramel syrup, and eggs with a glass of water"
	}),
];

const Dummy__Starter = [
	new MenuItem({
		id: "1",
		menuItemName: "Food 4",
        imageSrc: DummyFood,
        description: "Suya meat with a plate of shawarma, and a glass of orange juice"
	}),
	new MenuItem({
		id: "2",
		menuItemName: "Food 5",
        imageSrc: DummyFood,
        description: "Spaghetti bolognese with chicken, diced with carrots and onions"
	}),
	new MenuItem({
		id: "3",
		menuItemName: "Food 6",
        imageSrc: DummyFood,
        description: "Eba and Egusi soup, with goat head and a bottle of stout"
	}),
];

const Dummy_MenuCategories = [
	{
		categoryName: "Most Popular",
		menu: Dummy__MostPopular,
	},
	{
		categoryName: "Starter",
		menu: Dummy__Starter,
	},
	{
		categoryName: "Main Dishes",
		menu: Dummy__MostPopular,
	},
	{
		categoryName: "Drinks",
		menu: Dummy__MostPopular,
	},
	{
		categoryName: "Sides",
		menu: Dummy__MostPopular,
	},
];

export const Dummy_MenuTabItems = Dummy_MenuCategories.map(
	(category, key) =>
		new TabItemType({
			children: <List data={category.menu} renderItem={item => <OrderMenuItem {...item} id={item!.id}/>} />,
			label: category.categoryName,
			key: `${key}`,
			id: `${key}`,
		})
);  

const Dummy__OrderList = [];
