function ListGroup() {
	const items = [
		'New York',
		'San Francisco',
		'Tokyo',
		'London',
		'Paris'
	];


	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				//* React needs a key to track elements
				//* .map is a TS function so we need {}
				{items.map(item => <li key={item}>{item}</li>)}
			</ul>
		</>
	);
}
export default ListGroup;