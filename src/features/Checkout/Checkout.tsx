import "./Checkout.css";

import AppAdvert from "../../components/AppAdvert";
import { withFadeIn } from "../../hoc/WithFadeIn";
import CheckoutHeader from "./components/checkoutHeader";
import CheckoutList from "./components/checkoutList";
import CheckoutPriceSummary from "./components/checkoutPriceSummary";
import PaymentOption from "./components/paymentOptionGroup";
import { CheckoutProvider } from "./context";

const Checkout = () => {
	return (
		<>
			<CheckoutHeader />
			<AppAdvert />
			<CheckoutProvider>
				<CheckoutList />
				<CheckoutPriceSummary />
				<PaymentOption />
			</CheckoutProvider>
		</>
	);
};

export default withFadeIn(Checkout);
