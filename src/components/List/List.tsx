import { List as AntDList, ListProps } from 'antd';

interface IListProps<T> extends ListProps<T> {
	direction?: "vertical" | "horizontal";
	data: Array<T>;
	renderItem: (item?: T, index?: number) => React.ReactNode;
}

export default function List<T>({
	direction = "vertical",
	data,
	renderItem,
	...props
}: IListProps<T>) {
	return (
		<AntDList
			size="large"
			itemLayout={direction}
			dataSource={data}
			renderItem={renderItem}
			{...props}
		/>
	);
}
