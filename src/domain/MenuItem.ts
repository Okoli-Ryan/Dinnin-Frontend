import DummyMenuItemImage from '../assets/images/DummyFood.png';
import { BaseModel, IBaseModel } from './BaseModel';

export interface IMenuItem extends IBaseModel {
    menuItemName?: string,
    description?: string;
    price?: number,
    imageSrc?: any
}

export class MenuItem extends BaseModel {
    menuItemName: string
    description: string
    price: number
    imageSrc?: any

    constructor(props: IMenuItem) {
        super(props)
        this.imageSrc = props.imageSrc || DummyMenuItemImage
        this.description = props.description || "Random food quote random food quote Random food quote"
        this.price = props.price || 69.69
        this.menuItemName = props.menuItemName || "Random Food name"
    }
}