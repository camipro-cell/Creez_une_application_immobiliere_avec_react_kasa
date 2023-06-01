import React, { useState } from 'react';
import './Collapse.css';
import arrowopen from '../../assets/arrowopen.png';

function Collapse(props) {

	const [isOpen, setIsOpen] = useState(props.open !== undefined ? props.open: false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
   
	return (
		<div className='collapse-drop-down-list'>
			<h3 onClick={handleClick}>
				{props.title}
				<img className={isOpen ? 'arrow arrow-to-close': 'arrow arrow-to-open'}
					src={arrowopen}
					alt="show content"
				/>
			</h3>
			{isOpen && <div className='content-in-collapse'>{props.content}</div>}
	  	</div>
  	);
};

export default Collapse;
