import './Modal.css';

import { Modal as AntDModal } from 'antd';
import { ReactNode } from 'react';

interface IModal {
	header?: ReactNode;
	isOpen: boolean;
	onCancel?: () => void;
	children: ReactNode;
	className?: string;
	wrapClassName?: string;
}

export default function Modal({
	header,
	isOpen,
	onCancel,
	children,
	className,
	wrapClassName,
}: IModal) {
	return (
		<AntDModal
			closeIcon={null}
			title={header}
			footer={null}
			closable={false}
			open={isOpen}
			wrapClassName={wrapClassName}
			onCancel={onCancel}
			className={className}>
			{children}
		</AntDModal>
	);
}

function FullScreen({ header, isOpen, onCancel, children }: IModal) {
	return (
		<Modal
			header={header}
			isOpen={isOpen}
			onCancel={onCancel}
			wrapClassName="cart-modal"
			className="fullscreen-modal">
			{children}
		</Modal>
	);
}

Modal.FullScreen = FullScreen;
