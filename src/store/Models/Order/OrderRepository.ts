import { api as handleAPI } from "../../../core/Axios";

export const OrderRepository = {
	createOrder: (data: any) => handleAPI.post("order", data),
};
