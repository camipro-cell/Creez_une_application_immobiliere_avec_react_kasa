import React from 'react';
import './Banner.css';

function Banner(props) {
  	return (
		<div className='banner-style'>
			{props.title && <h2 className='title-banner'>{props.title}</h2>}
		  	<img src={props.image} alt={props.title} title={props.title} />
		</div>
  	);
};

export default Banner;
