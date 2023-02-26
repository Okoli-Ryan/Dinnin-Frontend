import DummyFoodImage from "../assets/images/DefaultFoodIcon.svg";
import { BaseModel, IBaseModel } from "./BaseModel";

export interface IMenuItem extends IBaseModel {
	menuItemName: string;
	description?: string;
	restaurantId: string;
	menuCategoryId: string;
	price: number;
	imageUrl: any;
}

export class MenuItem extends BaseModel {
	menuItemName: string;
	description: string;
	restaurantId: string;
	price: number;
	menuCategoryId: string;
	imageUrl: any;

	constructor(props: IMenuItem) {
		super(props);
		this.menuCategoryId = props?.menuCategoryId;
		this.restaurantId = props.restaurantId;
		this.imageUrl = props.imageUrl || DummyFoodImage;
		this.description =
			props.description || "Random food quote random food quote Random food quote";
		this.price = props.price || 69.69;
		this.menuItemName = props.menuItemName || "Random Food name";
	}
}
