import { api as handleApi } from "../../../core/Axios";
import { ITable } from "../../../domain/Table";

export const TableRepository = {
	getTableDetails: (code: string): Promise<ITable> =>
		//@ts-ignore
		handleApi.get(`table/data/${code}`, null),
};
