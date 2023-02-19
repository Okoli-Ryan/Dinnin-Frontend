import DummyMenuItemImage from '../assets/images/DummyFood.png';
import { BaseModel, IBaseModel } from './BaseModel';

export interface IMenuItem extends IBaseModel {
	menuItemName?: string;
	description?: string;
	category?: string;
	price?: number;
	imageUrl?: any;
}

export class MenuItem extends BaseModel {
	menuItemName: string;
	description: string;
	price: number;
	category?: string;
	imageUrl?: any;

	constructor(props: IMenuItem) {
		super(props);
		this.category = props?.category;
		this.imageUrl = props.imageUrl || DummyMenuItemImage;
		this.description =
			props.description || "Random food quote random food quote Random food quote";
		this.price = props.price || 69.69;
		this.menuItemName = props.menuItemName || "Random Food name";
	}
}