import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useErrorModal } from "./useErrorModal";

export default function ErrorModal() {
	const { closeModal, show, message, customCallback, customButtonText, hasCustomCallback } =
		useErrorModal();

	return (
		<Modal isOpen={show} onCancel={closeModal}>
			<div className="flex flex-col">
				<h2 className="font-bold text-lg text-center">An error occurred</h2>
				<p className="mt-3 text-text_primary text-center">{message}</p>
				{hasCustomCallback && (
					<Button onClick={customCallback} className="text-white mt-4 bg-primary">
						{customButtonText}
					</Button>
				)}
				<Button.Ghost onClick={closeModal} className="mt-2">
					Close
				</Button.Ghost>
			</div>
		</Modal>
	);
}
