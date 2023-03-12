import DefaultFoodImage from "../../assets/images/DefaultFoodIcon.svg";

interface IFoodImage {
	src: any;
	className?: string;
}

export default function FoodImage({ src, className = "" }: IFoodImage) {
	return (
		<div className={`flex max-h-[6rem] max-w-[4rem] justify-end  ${className}`}>
			<img src={src || DefaultFoodImage} className={`object-contain h-full w-auto`} />
		</div>
	);
}
