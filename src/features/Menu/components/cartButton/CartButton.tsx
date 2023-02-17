import { BsFillCartFill } from 'react-icons/bs';

import Button from '../../../../components/Button';

export default function CartButton() {
	return (
		<div className="w-full px-8 fixed z-20 bottom-4">
			<Button
				shape="round"
				block
				size="large"
				className=" text-white bg-[#E3E5E5] font-semibold"
				type="primary"
				icon={
					<span className="top-[10px] left-5 absolute">
						<BsFillCartFill color="white" size={18} />
					</span>
				}>
				View Cart
			</Button>
		</div>
	);
}
