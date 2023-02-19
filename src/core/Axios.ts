import axiosInstance, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import { setupCache } from "axios-cache-adapter";

import { BASE_URL, X_API_KEY } from "./Constants";
import { ResponseCodes } from "./ResponseCodes";

interface IResponse {
	responseCode: string;
	responseMessage: string;
	responseData: any;
}

const cache = setupCache({
	// maxAge: 0 * 60 * 1000,
	maxAge: 0,
});

const axios = axiosInstance.create({
	adapter: cache.adapter,
});

function handleRequest(req: InternalAxiosRequestConfig) {
	req.headers["Content-Type"] = "application/json";
	req.headers.Accept = "application/json";
	req.headers["x-api-key"] = X_API_KEY;

	return req;
}

axios.interceptors.request.use(
	async (req) => handleRequest(req),
	(error) => Promise.reject(error)
);

axios.interceptors.response.use(
	(res) => {
		if (res.data?.ResponseCodes !== ResponseCodes.SUCCESS) {
			return Promise.reject(res.data);
		}

		return res.data;
	},
	(err) => Promise.reject(err)
);

type IOptions = AxiosRequestHeaders & { fullPath: string };

export const api = {
	post: async (url: string, data?: any, options?: IOptions) =>
		axios.post(options?.fullPath ? url : BASE_URL + url, data, options && { headers: options }),
	patch: async (url: string, data?: any, options?: IOptions) =>
		axios.patch(
			options?.fullPath ? url : BASE_URL + url,
			data,
			options && { headers: options }
		),
	put: async (url: string, data?: any, options?: IOptions) =>
		axios.put(options?.fullPath ? url : BASE_URL + url, data, options && { headers: options }),
	delete: async (url: string, data: any, options: IOptions) => {
		data = data ? (data instanceof Object && !Object.keys(data).length ? null : data) : null;
		const config = data ? { headers: options, data } : { headers: options };
		return axios.delete(options?.fullPath ? url : BASE_URL + url, config);
	},
	get: async (url: string, params?: any, options?: IOptions) => {
		params = params
			? params instanceof Object && !Object.keys(params).length
				? null
				: params
			: null;
		const config = params ? { headers: options, params } : { headers: options };
		return axios.get(options?.fullPath ? url : BASE_URL + url, config);
	},
};
