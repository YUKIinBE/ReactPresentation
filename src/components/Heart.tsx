import React, { useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

interface Props {
	onClick: () => void;
}

const Heart = ({onClick}: Props) => {
	const [status, setStatus] = useState(false);

	const toggle = () => {
		setStatus(!status);
		onClick();
	}

	if(status)
	return (
		<BsFillHeartFill color="#ff6b81" size={20} onClick={toggle}/>
	)
	else
	return(
		<BsHeart color="#ff6b81" size={20} onClick={toggle}/>
	)
}

export default Heart