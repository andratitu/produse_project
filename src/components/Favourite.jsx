import { useState, useEffect } from "react";
import { Spinner, Row } from "reactstrap";
import "./Favourite.style.css";
import ProductComponent from "./ProductComponent";

function Favourite() {
	const [productList, setProductList] = useState(null);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));
	}, []);

	return (
		<>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1 className='text1'> Trending Products</h1>
			<p className='text1'>
				Aperiam dignissimos nam dolorum quam quod ducimus itaque, vero tempore
				totam beatae ea. Dolore placeat ex nisi sequi facere, porro officia
				repellat.
			</p>
			{productList ? (
				<div>
					<div className='product_list1 '>
						<Row>
							{productList.map((product, index) => {
								return (
									<ProductComponent
										product={product}
										key={"product_" + index}
									/>
								);
							})}
						</Row>
					</div>
				</div>
			) : (
				<>
					<Spinner>Loading...</Spinner>
				</>
			)}
		</>
	);
}

export default Favourite;
