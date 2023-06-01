import React from 'react';
import './Gallery.css'; 
import { useState } from "react";
import arrowprevious from '../../assets/arrowprevious.png';
import arrownext from '../../assets/arrownext.png'

function Gallery(props) {

	/* Setting thisIndex status to 0 */
	const [slideIndex, setSlideIndex] = useState(0);

	/* If index is equal to 0,
	then we return to the last image when clicking on previous arrow.
	Otherwise we return at index of the previous image. */
	const prevSlide = () => {
		setSlideIndex(slideIndex === 0 ? props.pictures.length - 1 : slideIndex - 1);
	};

	/* If index is equal to index of the last image,
	then we return to the first image  when clicking on next arrow.
	Otherwise we return at index of the next image. */
	const nextSlide = () => {
		setSlideIndex(slideIndex === props.pictures.length - 1 ? 0 : slideIndex + 1);
	};

	return (
		<div className="slider">
			{props.pictures && props.pictures.length > 0 && props.pictures.map((picture, index) => 
				<div key={index}>
					<img className={(index === slideIndex) ? `slider-item slider-item-${index} slider-item-show` : `slider-item slider-item-${index}`} src={picture} alt={props.title} title={props.title}/>
					{props.pictures.length > 1 && (
						<div>
							<div className='arrow-position-to-switch'>
								<img
									className='arrow-previous'
									src={arrowprevious}
									alt="previous visual"
									onClick={prevSlide}
								/>
								<div>
									<p className='counter'>{slideIndex + 1} / {props.pictures.length}</p>
								</div>
								<img
									className='arrow-next'
									src={arrownext}
									alt="next visual"
									onClick={nextSlide}
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Gallery;