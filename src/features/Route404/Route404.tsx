import Image404 from '../../assets/images/404.svg';

export default function Route404() {
	return (
		<div className="h-screen w-screen justify-center items-center flex flex-col">
			<img src={Image404} />
			<p className="text-xl font-extrabold text-text_primary text-center max-w-xs mt-2">
				Lost in the sauce! This page doesn't exist
			</p>
			<p className="text-text_primary mt-2">Try searching for something else instead</p>
		</div>
	);
}
