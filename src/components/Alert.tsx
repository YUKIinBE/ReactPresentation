import React, { ReactNode } from 'react'

interface Props {
	//* it allows to send html children elements to the component
	children: ReactNode;
}

const Alert = ({children}: Props) => {
	return (
		<div className='alert alert-primary'>{children}</div>
	)
}

export default Alert