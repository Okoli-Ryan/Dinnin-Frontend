import { AiOutlinePlus } from 'react-icons/ai';

import { IMenuItem } from '../../../../domain/MenuItem';

interface IOrderMenuItem extends IMenuItem {}

export default function OrderMenuItem({
	imageSrc,
	description,
	menuItemName,
	price,
}: IOrderMenuItem) {
	return (
		<div className="flex justify-between px-4 gap-4 mb-4 border-b-[1px] pb-4">
			<div className="flex flex-col gap-1">
				<h5 className="font-bold">{menuItemName}</h5>
				<p className="text-sm text-text_primary">{description}</p>
				<p className="font-bold mt-2">$ {price}</p>
			</div>
			{/* <div className="h-full flex items-center justify-center bg-red-300"> */}
				<div className="relative flex self-center">
					<img src={imageSrc} className="object-contain max-w-[4rem] max-h-[4rem]" />
					<span className="absolute shadow-lg bottom-0 right-0 w-6 h-6 flex justify-center items-center rounded-full bg-white">
						<AiOutlinePlus size={14} color="#121212" />
					</span>
				</div>
			{/* </div> */}
		</div>
	);
}