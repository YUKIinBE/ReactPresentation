import React, { useState } from 'react'

function Customer() {
	const [customer, setCustomer] = useState({
		name: 'John',
		address: {
			city: 'San Francisco',
			zipCode: 94111
		}
	});

	const handleClick = () => {
		setCustomer({ ...customer, address: { ...customer.address, zipCode: 94112 }})
	}
	
	
}

export default Customer