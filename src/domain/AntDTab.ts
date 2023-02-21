export interface ITabItemType {
	children: React.ReactNode;
	label: string;
	key: string;
}

export class TabItemType {
	children: React.ReactNode;
	label: string;
	key: string;

	constructor(props: ITabItemType) {
		this.children = props.children;
		this.key = props.key;
		this.label = props.label;
	}
}
