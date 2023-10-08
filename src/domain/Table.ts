import { BaseModel } from "./BaseModel";
import { IRestaurant } from "./Restaurant";

export interface ITable extends BaseModel {
	tableName: string;
	restaurantId: string;
	restaurant: IRestaurant;
	code: string;
}
