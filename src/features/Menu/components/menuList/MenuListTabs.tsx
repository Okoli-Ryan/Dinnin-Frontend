import { Button, Tabs } from "antd";
import { FaListUl } from "react-icons/fa";

import { ITabItemType } from "../../../../domain/AntDTab";
import MenuListModal from "./components";
import { useMenuListContext } from "./context";

interface IMenuListTabProps {
	categoryTabs: ITabItemType[];
}

export default function MenuListTabs({ categoryTabs }: IMenuListTabProps) {
	const { activeTabKey, onChangeActiveTabKey, changeIsBottomSheetOpen } = useMenuListContext();

	return (
		<>
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
			<MenuListModal />
		</>
	);
}
