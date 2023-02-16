export interface IBaseModel {
    id: string,
    createdAt?: Date,
    updatedAt?: Date
}

export class BaseModel {
    id: string
    createdAt: Date
    updatedAt: Date

    protected constructor(props: IBaseModel){
        this.id = props.id
        this.createdAt = props.createdAt || new Date
        this.updatedAt = props.updatedAt || new Date
    }
}