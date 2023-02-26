import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IPaymentOption, PAYMENT_OPTIONS } from "../../../../core/Constants";
import { Order } from "../../../../domain/Order";
import { dispatch, useAppSelector } from "../../../../store";

export const usePaymentOption = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const [orderNote, setOrderNote] = useState("");
	const [paymentOption, setPaymentOption] = useState(PAYMENT_OPTIONS[0]);
	const cart = useAppSelector((state) => state.cart);
	const loading = useAppSelector((state) => state.loading.models.order);
	const restaurantId = useAppSelector((state) => state.restaurant.id);

	function handleOrderNote(value: string) {
		setOrderNote(value);
	}

	function handlePaymentOption(value: IPaymentOption) {
		setPaymentOption(value);
	}

	async function createOrder() {
		const order = new Order({
			orderNote,
			restaurantId,
			orderItems: Object.values(cart),
			paymentOption: paymentOption.value,
		});

		try {
			await dispatch.order.createOrder(order);
			navigate(`/${slug}/success`);
		} catch (e) {
			console.log(e);
		}
	}

	return { handleOrderNote, handlePaymentOption, paymentOption, orderNote, createOrder, loading };
};
