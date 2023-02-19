export interface IBaseModel {
	id: string;
	createdAt?: Date;
	updatedAt?: Date;
	activeStatus: boolean;
}

export class BaseModel {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	activeStatus: boolean;

	protected constructor(props: IBaseModel) {
		this.id = props.id;
		this.activeStatus = props.activeStatus;
		this.createdAt = props.createdAt || new Date();
		this.updatedAt = props.updatedAt || new Date();
	}
}