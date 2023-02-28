import { dispatch, useAppSelector } from "../../store";

export const useErrorModal = () => {
	const { cb, message, hasCustomCallback, show, customButtonText } = useAppSelector(
		(state) => state.error
	);
	const closeModal = () => dispatch.error.clearError();
	const customCallback = () => {
		cb();
		closeModal();
	};

	return { message, hasCustomCallback, show, customButtonText, closeModal, customCallback };
};
