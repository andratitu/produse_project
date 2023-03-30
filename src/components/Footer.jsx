import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.style.css";

function Footer() {
	return (
		<div className='footer'>
			<br></br>
			<div className='footer_pages'>
				<Link to='/home'>Home</Link>-<Link to='/products'>Products</Link>
				<p className='paragraf'>Random-2023</p>
			</div>

			<br></br>

			<div className='icons'>
				<a className='facebook_icon' href='https://www.facebook.com/'>
					<FaFacebook />
				</a>
				<a className='twitter_icon' href='https://www.twitter.com/'>
					<FaTwitter />
				</a>
				<a className='linkedin_icon' href='https://www.linkedin.com/'>
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
}

export default Footer;
