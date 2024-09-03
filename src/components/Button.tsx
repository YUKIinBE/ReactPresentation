import React from 'react'

interface Props {
	children: string;
	//* limit the choice null / primary / secondary / danger
	color?: 'primary' | 'secondary' | 'danger';
	onClick: () => void
}


function Button({ children, onClick, color = 'primary' }: Props) {
	return (
		<button
			className={'btn btn-' + color}
			onClick={onClick}
		>{
				children
			}</button>


	)
}

export default Button