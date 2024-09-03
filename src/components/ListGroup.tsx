import { MouseEventHandler } from "react";

function ListGroup() {
	let items = [
		'New York',
		'San Francisco',
		'Tokyo',
		'London',
		'Paris'
	];

	//* this is Event handler
	const handleClick = (event: MouseEvent) => console.log(event);

	return (
		<>
			<h1>List</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{/* //* map function can take each element and its index as parameter */}
				{items.map((item, index) =>
					<li
						className="list-group-item"
						key={item}
						onClick={handleClick}
						// onClick={() => console.log(index + ' : ' + item)}
					>
						{item}
					</li>)}
			</ul>
		</>
	);
}
export default ListGroup;