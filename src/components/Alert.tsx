import React, { Children, ReactNode } from 'react'

interface Props {
	//* it allows to send html children elements to the component
	children: ReactNode;
	onClose: () => void;
}

const Alert = ({ children, onClose}: Props) => {
	return (
		<>
			<div
				className='alert alert-primary alert-warning alert-dismissible'
				role="alert">
				{children}
				<button type="button" className="btn-close" onClick={onClose}></button>
			</div>
		</>
	)
}

export default Alert