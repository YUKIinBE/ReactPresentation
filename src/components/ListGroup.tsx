import { Fragment } from "react/jsx-runtime";

function ListGroup() {
	return (
		//* function can return only 1 html element so we use <div>
		// <div>
		// 	<h1>List</h1>
		// 	<ul className="list-group">
		// 		<li className="list-group-item">An item</li>
		// 		<li className="list-group-item">A second item</li>
		// 		<li className="list-group-item">A third item</li>
		// 		<li className="list-group-item">A fourth item</li>
		// 		<li className="list-group-item">And a fifth one</li>
		// 	</ul>
		// </div>

		//* empty bracket is better as we don't actually need a <div>
		<>
			<h1>List</h1>
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</>
	);
}
export default ListGroup;