import React from 'react';
import './collapse.css';


function Collapse(props) {
   return (
        <div>
            <select className='test'>{props.title}</select>
            <option>{props.description}</option>
        </div>

   );
};

export default Collapse;