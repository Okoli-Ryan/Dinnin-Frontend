interface IFoodImage {
	src: any;
	className?: string;
}

export default function FoodImage({ src, className = "" }: IFoodImage) {
	return <img src={src} className={`object-contain max-w-[4rem] max-h-[4rem] ${className}`} />;
}
