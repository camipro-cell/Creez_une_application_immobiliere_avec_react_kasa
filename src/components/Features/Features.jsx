import React from 'react';
import './Features.css';

function Features(props) {
    return (
        <div className='informations-of-lodging'>
		    <div>
			    <h2 className='lodging-title-in-lodging-page'>{props.title}</h2>
			    <p className='location-of-lodging'>{props.location}</p>
			    <div className='button-tag-style'>
				    {props.tag && props.tag.length > 0 && props.tag.map((tag, index) =>
					    <button key={index}>{tag}</button>
					    )
				    }
			    </div>
		    </div>
		    <div>
		        <div className='host-informations'>
				    <p>{props.host}</p>
                    <img src={props.picture} alt="Accommodation host" title="Picture of host" />
			    </div>
			    <div className="stars-of-lodging">
				    {props.rating}
			    </div>
		    </div>
	    </div>
    );
};

export default Features;