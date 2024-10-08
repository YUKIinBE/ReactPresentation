import React, { useState } from 'react'

function CartWithDiscount() {
	const [cart, setCart] = useState({
		discount: .1,
		items: [
			{id: 1, title: 'Product 1', quantity: 1},
			{id: 2, title: 'Product 2', quantity: 1}
		]
	});

	const handleClick = () => {
		setCart({...cart, items: cart.items.map(
			item => item.id === 1? {
				...item, quantity: item.quantity++} : item)})
	}
	return (
		<div>CartWithDiscount</div>
	)
}

export default CartWithDiscount