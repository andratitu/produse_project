import { useState, useEffect } from "react";
import { Spinner, Input, Row } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./Products.style.css";

function Products() {
	const [productList, setProductList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);

	//Variabile de stare pt filtrari

	const [textInput, setTextInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	//Pasul de adaugare de date din API
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryListAPI) => setCategoryList(categoryListAPI));
	}, []);

	return (
		<>
			{productList && categoryList ? (
				<div className='prod'>
					<div className='category_list m-4 d-flex flex-column'>
						<h3>Categories List</h3>
						{categoryList.map((category, index) => {
							return (
								<h6
									key={"category_" + index}
									onClick={() => {
										setCategoryList(category);
									}}>
									{category}
								</h6>
							);
						})}
					</div>
					<div className='product_list '>
						<Input
							placeholder='Search...'
							className='w-25'
							value={textInput}
							onChange={(event) => {
								setTextInput(event.target.value);
							}}
						/>
						<Row xs='1' lg='5' className='card-deck'>
							{productList
								.filter((product) => {
									return (
										selectedCategory === null ||
										selectedCategory === product.category
									);
								})
								.filter((product) => {
									return (
										product.description.includes(textInput) ||
										product.title.includes(textInput)
									);
								})
								.map((product, index) => {
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

export default Products;
