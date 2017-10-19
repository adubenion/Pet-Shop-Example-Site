import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<header>
				Dog Food Shop
				</header>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/About">About</Link>
						<Link to="/Shop">Shop</Link>
						<Link to="Contact">Contact</Link>
						<Link to="Cart">Cart</Link>
					</nav>
			</div>
		);
	}
}