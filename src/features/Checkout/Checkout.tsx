import AppAdvert from '../../components/AppAdvert';
import CheckoutHeader from './components/checkoutHeader';
import CheckoutList from './components/checkoutList';
import CheckoutPriceSummary from './components/checkoutPriceSummary';
import PaymentOption from './components/paymentOptionGroup';

export default function Checkout() {
	return (
		<>
			<CheckoutHeader />
			<AppAdvert />
			<CheckoutList />
			<CheckoutPriceSummary />
			<PaymentOption />
		</>
	);
}
