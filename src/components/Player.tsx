import React, { useState } from 'react'

function player() {
	const [game, setGame] = useState({
		id: 1,
		player: {
			name: 'John'
		}
	})

	const handleClick = () => {
		setGame({...game, player: {...game.player, name: 'Bob'}})
	}
	return (
		<div>player</div>
	)
}

export default player