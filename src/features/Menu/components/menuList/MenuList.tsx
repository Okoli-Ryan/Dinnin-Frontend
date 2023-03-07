import './MenuList.css';

import { Input } from "antd";
import { BsSearch } from 'react-icons/bs';

import { MenuListProvider } from "./context";
import MenuListTabs from "./MenuListTabs";
import { useMenuList } from "./useMenuList";

export default function MenuList() {
	const { categoryTabs, searchValue, onChangeSearch } = useMenuList();

	return (
		<>
			<div className="sticky top-0 z-10 flex justify-between p-4 bg-white ">
				<Input
					onChange={onChangeSearch}
					className="p-2 text-[#F2F4F5] rounded-full px-4 text-center bg-[#F2F4F5] border-0 "
					placeholder="Search menu"
					allowClear
					value={searchValue}
					prefix={<BsSearch color="#12121299" />}
				/>
			</div>
			<MenuListProvider>
				<MenuListTabs categoryTabs={categoryTabs} />
			</MenuListProvider>
		</>
	);
}
