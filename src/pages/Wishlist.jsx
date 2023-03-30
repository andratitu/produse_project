import { useEffect, useState } from "react";
import { Button } from "reactstrap";

function Wishlist() {
	//Pasul 2 - se creaza o variabila de stare pentru datele noastre
	const [wishlistProducts, setWishlistProducts] = useState([]);

	//Pasul 1 - preluare date din localStorage
	useEffect(() => {
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			const products = JSON.parse(productsString);
			setWishlistProducts(products);
		}
	}, []);

	const onDelete = (productId) => {
		const filteredProducts = wishlistProducts.filter(
			(product) => product.id !== productId
		);
		localStorage.setItem("produse", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<>
			<h2>Wishlist page</h2>
			<ul>
				{wishlistProducts.map((product, index) => {
					return (
						<li key={"product_" + index} className='mt-2'>
							{product.title}
							<Button
								color='danger'
								onClick={() => {
									onDelete(product.id);
								}}>
								Delete
							</Button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Wishlist;
