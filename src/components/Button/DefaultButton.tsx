import { Button } from 'antd';
import React from 'react';

import type { ButtonProps } from "antd";

interface IButton extends ButtonProps {
	children: React.ReactNode;
}

export default function DefaultButton({
	children,
	type = "primary",
	className,
	...props
}: IButton) {
	return (
		<Button
			shape="round"
			size="large"
			className={`${className} font-semibold ${
				type === "primary" ? "text-white bg-primary" : "text-primary"
			}`}
			type={type}
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
