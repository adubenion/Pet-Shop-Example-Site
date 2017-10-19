import React from 'react';

const productArray = [
	{
		src: "./img/products/beneful.png",
		alt: "Beneful"
	},
	{
		src: "./img/products/iams.jpg",
		alt: "Iams"
	},
	{
		src: "./img/products/kibbles.jpg",
		alt: "Kibbles 'n Bits"
	},
	{
		src: "./img/products/pedigree.jpg",
		alt: "Pedigree"
	},
	{
		src: "./img/products/puppy-chow.jpg",
		alt: "Puppy Chow"
	}
]

const pics = [];
const buttons = [];

const products = function() {
	for (var i=0; i < productArray.length; i++) {
		pics.push(
			<img key={Math.random() * 4} src={productArray[i].src} alt={productArray[i].alt} />
		);
	}
}

const shopping = function() {
	for (var i=0; i < productArray.length; i++) {
		buttons.push(
			<button key={Math.random() * 4}>Add to Cart</button>
		);
	}
}

products();
shopping();

export class Shop extends React.Component {
	render() {
		return(
			<div className="products">
			<div>
				<img src={productArray[0].src} alt={productArray[0].alt} /><br />
				<p>$10.99</p>
				<button>Add to Cart</button>
			</div>
			<div>
				<img src={productArray[1].src} alt={productArray[1].alt} /><br />
				<p>$10.99</p>
				<button>Add to Cart</button>
			</div>
			<div>
				<img src={productArray[2].src} alt={productArray[2].alt} /><br />
				<p>$10.99</p>
				<button>Add to Cart</button>
			</div>
			<div>
				<img src={productArray[3].src} alt={productArray[3].alt} /><br />
				<p>$10.99</p>
				<button>Add to Cart</button>
			</div>
			<div>
				<img src={productArray[4].src} alt={productArray[4].alt} /><br />
				<p>$10.99</p>
				<button>Add to Cart</button>
			</div>
			</div>
		);
	}
}