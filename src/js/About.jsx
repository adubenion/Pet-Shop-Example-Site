import React from 'react';
import {Link} from 'react-router-dom';

export class About extends React.Component {
	render() {
		return(
			<div>
				<header>About Us</header>
				<img src="./img/dog-food.jpg" alt="Dog at dog food bowl" />
				<h2>Our Products</h2>
				<p>
					We are devoted to providing our customers with the best<br />
					nutritional experience for their canine friends! We re-sell<br />
					brand-name, top-teir dog food brands at affordable<br />
					and competitive prices.<br />
					<br />
					Check out our <Link to="/shop">"Shop"</Link> page to learn more!
				</p>

				<p>
					Dog Food, Inc.<br />
					457 W Washington Ave, Columbus, OH 41028<br />
					p: (345) 234-5679 fax: (345) 234-1100<br />
					<a href="mailto:aaron.dubenion@gmail.com">aaron.dubenion@gmail.com</a>
				</p>
			</div>
		);
	}
}