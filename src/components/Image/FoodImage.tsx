import DefaultFoodImage from "../../assets/images/DefaultFoodIcon.svg";

interface IFoodImage {
	src: any;
	className?: string;
}

export default function FoodImage({ src, className = "" }: IFoodImage) {
	return (
		<img
			src={src || DefaultFoodImage}
			className={`object-contain max-w-[4rem]  ${className}`}
		/>
	);
}
