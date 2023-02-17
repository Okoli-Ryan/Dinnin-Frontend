import { Button } from 'antd';
import React from 'react';

import type { ButtonProps } from "antd";

interface IButton extends ButtonProps {
	children: React.ReactNode;
}

export default function DefaultButton({ children, className, ...props }: IButton) {
	return (
		<Button
			shape="round"
			size="large"
			className={`${className} bg-primary active:text-text_primary `}
			{...props}>
			{children}
		</Button>
	);
}

function GhostButton({ children, className, ...props }: IButton) {
	return (
		<Button type="ghost" size="large" className={`${className}`} {...props}>
			{children}
		</Button>
	);
}

DefaultButton.Ghost = GhostButton;
