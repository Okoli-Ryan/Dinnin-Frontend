import { Button } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

export default function CheckoutListFooter() {
	const navigate = useNavigate();
	const { slug } = useParams();

	function navigateToAddMore() {
		navigate(`/${slug}/menu`, {
			state: {
				showCart: true,
			},
		});
	}

	return (
		<div className="p-2 px-4 border-b-2">
			<Button
				type="ghost"
				shape="round"
				onClick={navigateToAddMore}
				className="items-center flex gap-2 bg-[#F2F4F5] text-xs font-bold !px-2"
				size="middle"
				icon={
					<span>
						<AiOutlinePlus size={14} color="#121212" className="flex" />
					</span>
				}>
				ADD ITEMS
			</Button>
		</div>
	);
}
