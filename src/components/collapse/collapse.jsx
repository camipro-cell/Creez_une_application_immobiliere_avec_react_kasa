import React, { useState } from 'react';
import './collapse.css';
import arrowopen from '../../assets/arrowopen.png';


function Collapse(props) {
    
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
   
    return (
        <div className='collapse_drop_down_list'>
          <h3 onClick={handleClick}>
            {props.title}
            <img
              className={isOpen ? 'arrow arrow_to_open' : 'arrow arrow_to_close'}
              src={arrowopen}
              alt="show content"
            />
          </h3>
          {isOpen && <div className='content_in_collapse'>{props.content}</div>}
        </div>
    );
  };
    
export default Collapse;
    