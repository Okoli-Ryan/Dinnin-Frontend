import Hero from "../../../../assets/images/Hero.png";
import { useAppSelector } from "../../../../store";

export default function Header() {
	const { address, logoUrl, city, state, restaurantName } = useAppSelector(
		(state) => state.restaurant
	);

	return (
		<div className="relative">
			<div className="relative">
				<img src={Hero} className="h-40 w-full object-cover" alt="hero image" />
				<img
					src={logoUrl}
					className="w-20 h-20 rounded-full absolute -bottom-10 left-4"
					alt="restaurant logo"
				/>
			</div>
			<div className="flex flex-col mt-6 p-4 pb-0 gap-1">
				<h4 className=" font-bold">{restaurantName}</h4>
				{/* <p className="flex space-x-2 items-center">
					<AiFillStar className="" />
					<span className="text-sm">4.2</span>
					<span className="text-[#F2003C] text-sm">(252)</span>
				</p> */}
				<p className="text-sm">
					{city}, {state}
				</p>
				{/* <p className="flex items-center">
					<span className="text-[#37863E] font-bold text-sm">Open now</span>
					<BsDot className="text-[#12121299]" size={18} />
					<span className="font-light text-sm">Closes at 8:00 PM</span>
				</p> */}
			</div>
		</div>
	);
}
