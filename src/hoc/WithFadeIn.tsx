import { motion } from "framer-motion";
import { useId } from "react";

import { PageFadeIn } from "../core/AnimationVariants";

export const withFadeIn = (WrappedComponent: any) => {
	return (props: any) => {
		const id = useId();
		return (
			<motion.div
				key={id}
				className="min-h-full"
				variants={PageFadeIn}
				animate="visible"
				exit="hidden"
				initial="initial"
				transition={{ duration: 0.3 }}>
				<WrappedComponent {...props} />
			</motion.div>
		);
	};
};
