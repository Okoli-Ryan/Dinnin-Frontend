export default function CheckoutItem() {
	return (
		<div className="flex justify-between mb-4">
			<div className="flex gap-4">
				<span>1</span>
				<div className="flex flex-col gap-2">
					<p className="font-bold text-text_primary_bold">Main Dishes</p>
					<div className="flex flex-col gap-1">
						<p className="text-text_primary text-sm">Danish Pork BBQ RIBS x1</p>
						<p className="text-text_primary text-sm">Bacalao Frito x1</p>
						<p className="text-text_primary text-sm">Salmon Chimichurri x1</p>
					</div>
				</div>
			</div>
			<p className="text-text_primary font-lg">$ 45.44</p>
		</div>
	);
}
