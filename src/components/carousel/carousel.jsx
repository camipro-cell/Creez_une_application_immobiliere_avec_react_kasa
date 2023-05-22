import React from 'react';
import './carousel.css'; 

function Carousel(props) {
    

    return (
        <div>
            <img src={props.pictures} alt={props.title}/>
        </div>
    );
}

export default Carousel;