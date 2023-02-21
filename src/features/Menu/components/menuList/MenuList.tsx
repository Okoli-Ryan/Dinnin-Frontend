import './MenuList.css';

import { Input, Tabs } from 'antd';
import { BsSearch } from 'react-icons/bs';

import { useAppSelector } from '../../../../store';
import { ParseMenuCategories } from "./Utils";

export default function MenuList() {
	const { categories = [] } = useAppSelector((state) => state.restaurant);
	const categoryTabs = ParseMenuCategories(categories);

	return (
		<>
			<div className="flex justify-between p-4 sticky top-0 bg-white z-10 ">
				<Input
					className="p-2 text-[#F2F4F5] rounded-full px-4 text-center bg-[#F2F4F5] "
					placeholder="Search menu"
					prefix={<BsSearch color="#12121299" />}
				/>
			</div>
			<Tabs defaultActiveKey="1" items={categoryTabs} className="mb-12" />
		</>
	);
}
