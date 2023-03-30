import "./Categorii.style.css";

function Categorii() {
	return (
		// <div className='categorii'>
		// 	{/*  <div className='poza1'>
		// 		<img src='poza1.jpg'></img>
		// 	</div>
		// 	<div className='poza2'>
		// 		<img src='poza2.jpg'></img>
		// 	</div>
		// 	<div className='poza3'>
		// 		<img src='poza3.jpg'></img>
		// 	</div>  */}
		// 	{"\n"}
		// 	<div className='container1'>
		// 		<h5>Lorem ipsum dolor</h5>
		// 		<img className='poza1' src='poza1.webp'></img>
		// 	</div>

		// 	<div className='container2'>
		// 		<h5>Lorem ipsum dolor sit amet</h5>
		// 		<img className='poza2' src='poza2.webp'></img>
		// 	</div>
		// 	<div className='container3'>
		// 		<h5>Lorem ipsum dolor etm el</h5>
		// 		<img className='poza3' src='poza 3.jpg'></img>
		// 	</div>
		// </div>

		<div className='big-container m-5'>
			<div className='small-container'>
				<img src='poza 3.jpg' alt='Imaginea 1' className='img-right' />
				<div className='text-left'>
					<h2>Lorem ipsum dolor </h2>
					<a href='./Produse'>
						<button className='button'>Discover Now</button>
					</a>
				</div>
			</div>
			<div className='small-container'>
				<img src='poza1.webp' alt='Imaginea 2' className='img-right' />
				<div className='text-left'>
					<h2>Sit Amet Consectetur</h2>
					<a href='./Products'>
						<button className='button'>Discover Now</button>
					</a>
				</div>
			</div>
			<div className='small-container'>
				<img src='poza2.webp' alt='Imaginea 3' className='img-right' />
				<div className='text-left'>
					<h2>Adipisicing Elit Officia</h2>
					<a href='./Produse'>
						<button className='button'>Discover Now</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Categorii;
