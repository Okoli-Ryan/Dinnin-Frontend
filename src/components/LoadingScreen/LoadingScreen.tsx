import { Spin } from "antd";
import { CgSpinner } from "react-icons/cg";

export default function LoadingScreen() {
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<Spin indicator={<CgSpinner className="text-primary animate-spin duration-300" />} />
		</div>
	);
}
