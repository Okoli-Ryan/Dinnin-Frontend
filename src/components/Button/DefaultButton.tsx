import { Button } from 'antd';
import React from 'react';

import type { ButtonProps } from "antd";

interface IButton extends ButtonProps {
	children: React.ReactNode;
}

export default function DefaultButton({ children, ...props }: IButton) {
	return <Button {...props}>{children}</Button>;
}
