import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<div className='navbar'>
			<div className='home_products'>
				<Link to='/home'>Home</Link>
				<Link to='/products'>Products</Link>
			</div>
			<div className='logo-container'>
				<img src='logo.png' alt='Logo' className='logo' />
			</div>

			<div className='wishlist'>
				<Link to='/wishlist'>Wishlist</Link>
			</div>
		</div>
	);
}

export default Navigation;
