import Lottie from "lottie-react";

import LoadingAnimation from "../../assets/lottie/FoodLoading.json";

interface ILoadingScreen {
	caption?: string;
}

export default function LoadingScreen({ caption }: ILoadingScreen) {
	return (
		<div className="h-screen w-screen flex justify-center flex-col items-center relative">
			<Lottie animationData={LoadingAnimation} loop height={400} width={400} />
			{/* {caption && <p className="mt-4 font-bold">{caption}</p>} */}
			<div className="w-full text-sm absolute bottom-1 text-primary text-center">
				Powered by Orderup
			</div>
		</div>
	);
}
