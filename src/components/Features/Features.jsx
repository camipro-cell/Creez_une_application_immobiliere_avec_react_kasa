import React from 'react';
import './Features.css';

function Features(props) {
    return (
        <div className='informations_of_lodging'>
		    <div>
			    <h2 className='lodging_title_in_lodging_page'>{props.title}</h2>
			    <p className='location_of_lodging'>{props.location}</p>
			    <div className='button_tag_style'>
				    {props.tag && props.tag.length > 0 && props.tag.map((tag, index) =>
					    <button key={index}>{tag}</button>
					    )
				    }
			    </div>
		    </div>
		    <div className='host_infomations_and_star'>
		        <div className='host_informations'>
				    <p>{props.host}</p>
                    <img src={props.picture} alt="Accommodation host" title="Picture of host" />
			    </div>
			    <div className="stars_of_lodging">
				    {props.rating}
			    </div>
		    </div>
	    </div>
    );
};

export default Features;