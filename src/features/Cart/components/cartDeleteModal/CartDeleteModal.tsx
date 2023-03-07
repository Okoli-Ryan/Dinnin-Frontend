import DefaultButton from '../../../../components/Button/DefaultButton';
import Modal from '../../../../components/Modal';
import { useCartDeleteModal } from "./useCartDeleteModal";

export default function CartDeleteModal() {

    const { deleteItem, isModalOpen, hideDeleteModal } = useCartDeleteModal();

	return (
		<Modal isOpen={isModalOpen} className="">
			<div className="flex flex-col">
				<h2 className="font-bold text-xl text-center">Remove item?</h2>
				<p className="mt-3 text-text_primary text-center">
					Are you sure want to remove this item from your cart?
				</p>
				<DefaultButton className="text-white mt-4 bg-primary" onClick={deleteItem}>
					Sure
				</DefaultButton>
				<DefaultButton.Ghost className="mt-2" onClick={hideDeleteModal}>
					No, thanks
				</DefaultButton.Ghost>
			</div>
		</Modal>
	);
}
