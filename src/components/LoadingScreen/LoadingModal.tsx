import { Spin } from "antd";
import { CgSpinner } from "react-icons/cg";

import { useAppSelector } from "../../store";
import Modal from "../Modal";

interface ILoadingModal {
	isLoading?: boolean;
}

export default function LoadingModal({ isLoading = false }: ILoadingModal) {
	const loading = useAppSelector((state) => state.loading.global);

	return (
		<Modal.FullScreen
			isOpen={loading || isLoading}
			wrapClassName="h-screen w-screen overflow-hidden"
			className="flex justify-center items-center">
			<Spin indicator={<CgSpinner size={24} className="text-primary" />} />
		</Modal.FullScreen>
	);
}
