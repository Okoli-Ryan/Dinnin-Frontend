import { List as AntDList } from 'antd';

interface IListProps<T> {
    direction?: 'vertical' | 'horizontal',
    data: Array<T>,
    renderItem: (item?: T, index?: number) => React.ReactNode
}

export default function List<T>({ direction = "vertical", data, renderItem } : IListProps<T>) {
  return (
    <AntDList 
    size='large'
        itemLayout={direction}
        dataSource={data}
        renderItem={renderItem}
    />
  )
}
