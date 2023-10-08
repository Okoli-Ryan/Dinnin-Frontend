import { api as handleAPI } from "../../../core/Axios";
import { IMakeOrder } from "../../../domain/MakeOrder";

export const OrderRepository = {
	createOrder: (data: any) => handleAPI.post<IMakeOrder>("order", data),
};
