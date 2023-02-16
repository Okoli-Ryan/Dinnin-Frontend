import CartButton from "./components/cartButton";
import Header from "./components/header";
import MenuList from "./components/menuList";

export default function MenuPage() {
	return (
		<div>
			<Header />
			<MenuList />
			<CartButton />
		</div>
	);
}
