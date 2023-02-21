import { useEffect } from "react";

export const useFetch = (cb: () => Promise<any>) => {
	useEffect(() => {
		cb();
	}, []);
};
