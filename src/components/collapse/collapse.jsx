import React, { useState } from 'react';
import './collapse.css';
import arrowopen from '../../assets/arrowopen.png';
import arrowclose from '../../assets/arrowclose.png'


function Collapse(props) {
   const [isOpen, setIsOpen] = useState(false);
   const handleClick = () => { 
      setIsOpen(!isOpen);
    };

    return (
        <div className='collapse_drop_down_list'>
            <h3 onClick={handleClick}>
                {props.title}
                {isOpen ? (
                    <img src={arrowclose} alt='hide content' title='arrow hide content' />
                  ) : (
                    <img src={arrowopen} alt='show content' title='arrow show content' />
                  ) 
                }        
            </h3>
            {isOpen && <p>{props.description}</p>}
        </div>
    );
};

export default Collapse;