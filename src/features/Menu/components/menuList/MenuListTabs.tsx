import { Button, Tabs } from 'antd';
import { FaListUl } from 'react-icons/fa';

import EmptyState from '../../../../assets/images/EmptyImage.svg';
import { ITabItemType } from '../../../../domain/AntDTab';
import MenuListModal from './components';
import { useMenuListContext } from './context';

interface IMenuListTabProps {
	categoryTabs: ITabItemType[];
}

export default function MenuListTabs({ categoryTabs }: IMenuListTabProps) {
	const { activeTabKey, onChangeActiveTabKey, changeIsBottomSheetOpen } = useMenuListContext();
	const isEmpty = categoryTabs.length === 0;

	return (
		<>
			{isEmpty ? (
				<div className="flex flex-col flex-1 justify-center items-center h-screen max-h-[30vh]">
					<img src={EmptyState} />
					<p className="text-xl font-bold text-text_primary_bold">
						We didn't find a match
					</p>
					<p className="text-text_primary">Try searching for something else instead</p>
				</div>
			) : (
				<Tabs
					activeKey={activeTabKey}
					onChange={onChangeActiveTabKey}
					tabBarExtraContent={{
						left: (
							<Button
								onClick={() => changeIsBottomSheetOpen(true)}
								className="border-0 flex justify-center items-center ml-2"
								icon={<FaListUl />}
							/>
						),
					}}
					items={categoryTabs}
					className="mb-12"
				/>
			)}
			<MenuListModal />
		</>
	);
}
