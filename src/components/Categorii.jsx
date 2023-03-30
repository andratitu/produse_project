import "./Categorii.style.css";

function Categorii() {
	return (
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
