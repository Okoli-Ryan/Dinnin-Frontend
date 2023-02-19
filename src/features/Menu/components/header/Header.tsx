import { AiFillStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

import DummyRestaurantLogo from '../../../../assets/images/DummyRestaurantIcon.png';
import Hero from '../../../../assets/images/Hero.png';

export default function Header() {
	return (
		<div className="relative">
			<div className="relative">
				<img src={Hero} className="h-40 w-full object-cover" alt="hero image" />
				<img
					src={DummyRestaurantLogo}
					className="w-20 h-20 rounded-full absolute -bottom-10 left-4"
					alt="restaurant logo"
				/>
			</div>
			<div className="flex flex-col mt-6 p-4 pb-0 gap-1">
				<h4 className=" font-bold">NICESTRO</h4>
				<p className="flex space-x-2 items-center">
					<AiFillStar className="" />
					<span className="text-sm">4.2</span>
					<span className="text-[#F2003C] text-sm">(252)</span>
				</p>
				<p className="text-sm">234 Palm Springs, NY</p>
				<p className="flex items-center">
					<span className="text-[#37863E] font-bold text-sm">Open now</span>
					<BsDot className="text-[#12121299]" size={18} />
					<span className="font-light text-sm">Closes at 8:00 PM</span>
				</p>
			</div>
		</div>
	);
}
