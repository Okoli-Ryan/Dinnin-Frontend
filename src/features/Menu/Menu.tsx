import { motion } from "framer-motion";

import { PageFadeIn } from "../../core/AnimationVariants";
import CartButton from "./components/cartButton";
import Header from "./components/header";
import MenuList from "./components/menuList";

const Menu = () => {
	return (
		<>
			<motion.div
				className="min-h-full"
				variants={PageFadeIn}
				animate="visible"
				exit="hidden"
				initial="initial"
				transition={{ duration: 0.3 }}>
				<Header />
				<MenuList />
			</motion.div>
			<CartButton />
		</>
	);
};

export default Menu;
