import React, { useState } from 'react'

function Pizza() {
	const [pizza, setPizza] = useState({
		name: 'Spicy Pepperoni',
		toppings: ['Mushroom']
	});

	const handleClick = () => {
		setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
	}
	return (
		<div>Pizza</div>
	)
}

export default Pizza