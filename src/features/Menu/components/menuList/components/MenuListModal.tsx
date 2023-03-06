import "react-spring-bottom-sheet/dist/style.css";
import "./MenuListModal.css";

import { Button } from "antd";
import { IoCloseSharp } from "react-icons/io5";
import { BottomSheet } from "react-spring-bottom-sheet";

import { IMenuCategory } from "../../../../../domain/MenuCategogy";
import { useMenuListModal } from "./useMenuListModal";

export default function MenuListModal() {
	const { categories, isBottomSheetOpen, selectMenuCategory, closeBottomSheetModal } =
		useMenuListModal();

	return (
		<BottomSheet open={isBottomSheetOpen} className="z-50 relative" header={false}>
			<div>
				<div className="justify-between flex p-4 border-b-2 items-center">
					<span className="text-lg text-black font-bold">Menu</span>
					<Button
						onClick={closeBottomSheetModal}
						className="p-3 bg-[#DBDDDD] rounded-full h-full border-0 outline-0">
						<IoCloseSharp color="#090A0A" />
					</Button>
				</div>
				{categories.map((category) => (
					<CategoryItem
						{...category}
						selectMenuCategory={selectMenuCategory}
						key={category.id}
						count={category.menuItems.length}
					/>
				))}
			</div>
		</BottomSheet>
	);
}

interface ICategoryItem extends IMenuCategory {
	count: number;
	selectMenuCategory: (e: string) => void;
}

function CategoryItem({ count, categoryName, selectMenuCategory, id }: ICategoryItem) {
	return (
		<Button
			onClick={() => selectMenuCategory(id)}
			className="justify-between flex h-full p-4 items-center w-full border-0">
			<span>{categoryName}</span>
			<span className="">{count}</span>
		</Button>
	);
}
