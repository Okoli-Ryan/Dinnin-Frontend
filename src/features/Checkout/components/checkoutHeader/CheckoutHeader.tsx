import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";

export default function CheckoutHeader() {
	const navigate = useNavigate();
	const { slug } = useParams();

	function goBack() {
		navigate(`/${slug}`, {
			state: {
				showCart: false,
			},
		});
	}

	return (
		<div className="p-4 pb-2 flex justify-between items-center">
			<div className="flex flex-1">
				<button onClick={goBack}>
					<FaChevronLeft className="text-text_primary" />
				</button>
			</div>
			<h4 className="font-bold text-text_primary text-center flex-1">Checkout</h4>
			<div className="flex-1 flex"></div>
		</div>
	);
}
