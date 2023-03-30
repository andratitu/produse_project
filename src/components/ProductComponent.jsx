import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Col,
} from "reactstrap";

import "./ProductComponent.style.css";

function ProductComponent({ product }) {
	const addToWishlist = () => {
		const newProducts = [];
		newProducts.push(product);
		localStorage.setItem("product", JSON.stringify(newProducts));
		const productsString = localStorage.getItem("products");

		if (productsString !== null) {
			const product = JSON.parse(productsString);

			const existNr = product.find((productElement) => {
				return productElement.id === product.id;
			});

			if (existNr === undefined) {
				product.push(product);
			}

			localStorage.setItem("products", JSON.stringify(product));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("products", JSON.stringify(newProducts));
		}
	};
	return (
		<Col className='Card mt-4'>
			<Card className='card'>
				<img alt='Sample' src={product.image} />
				<CardBody>
					<CardTitle tag='h5'>{product.title}</CardTitle>
					<CardSubtitle tag='h6'>{product.price}$</CardSubtitle>

					<Button
						onClick={() => {
							addToWishlist();
						}}>
						Add to wishlist
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}
export default ProductComponent;
