import React, { useState } from 'react'

function Tag() {
	const [tags, setTags] = useState(['happy', 'cheerful']);

	const handleClick = () => {
		setTags([...tags, 'exciting']);

		setTags(tags.filter(tag => tag !== 'happy'));

		setTags(tags.map(tag => tag === 'happy'? 'happiness' : tag))
	}
}

export default Tag