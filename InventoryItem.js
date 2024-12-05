function InventoryItem({ name, type, quantity = 0, price = 0 }) {

	return (
		<div>
			<h2>{name} ({type})</h2>
			{quantity < 5 ? (
				<Message text={`⚠️ Low stock! ${quantity} remained.`} />
			) : null}

			{(quantity * price) > 500 ? (
				<Message text={"💰 High value - consider extra protection!"} />
			) : null}


		</div>
	);
}
