import "../../hojas-de-estilo/NavBar.css"

const ItemListContainer = (props) => {
	console.log(props);
	return (
		<div className="text">
			<h1>{props.text}</h1>
			<h2>{props.text2}</h2>
		</div>
	);
};

export default ItemListContainer;