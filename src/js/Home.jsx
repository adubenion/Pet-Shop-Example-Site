import React from 'react';

export class Home extends React.Component {
	render() {
		return(
			<div>
				<main id="wrapper">
					<section className="images">
						<div >
							<a href=""><img src="./img/dog-food-shop.png" alt="Shop Logo" /></a>
						</div>
						<div className="logos">
							<a href="http://www.facebook.com"><img src="./img/facebook.png" alt="facebook" /></a>
							<a href="http://twitter.com"><img src="./img/twitter.png" alt="twitter" /></a>
							<a href="http://instagram.com"><img src="./img/insta.png" alt="instagram" /></a>
						</div>
						<div>
							<a href=""><img src="./img/shop-img.png" alt="Shop" /></a>
							<a href=""><img src="./img/about-us.png" alt="About Us" /></a>
						</div>
					</section>
			    </main>
		    </div>
		);
	}
}

