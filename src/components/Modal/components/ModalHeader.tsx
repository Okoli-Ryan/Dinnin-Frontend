import React, { ReactNode } from 'react';

interface IModalHeader {
	left?: ReactNode;
	right?: ReactNode;
	children: ReactNode;
}

export default function ModalHeader({ left, right, children }: IModalHeader) {
	return (
		<div className="flex justify-between p-4">
			{left}
			{children}
			{right}
		</div>
	);
}
