import AppAdvert from '../../components/AppAdvert';
import { withFadeIn } from "../../hoc/WithFadeIn";
import CheckoutHeader from './components/checkoutHeader';
import CheckoutList from './components/checkoutList';
import CheckoutPriceSummary from './components/checkoutPriceSummary';
import PaymentOption from './components/paymentOptionGroup';

const Checkout = () => {
	return (
		<>
			<CheckoutHeader />
			<AppAdvert />
			<CheckoutList />
			<CheckoutPriceSummary />
			<PaymentOption />
		</>
	);
};

export default withFadeIn(Checkout);