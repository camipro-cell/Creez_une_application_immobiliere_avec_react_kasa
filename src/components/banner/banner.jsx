import React from 'react';
import './banner.css';

function Banner(props) {
  return (
      <div className='banner_style'>
    	  {props.title && <h2 className='title_banner'>{props.title}</h2>}
        <img className='img_banner'src={props.image} alt={props.title} title={props.title} />
      </div>
  )
}

export default Banner;



  

