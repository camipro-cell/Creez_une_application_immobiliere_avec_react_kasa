import React from 'react';
import './footer.css'
import logo from '../../assets/logofooter.png'

function Footer() {
    return ( 
        <footer>
            <div className='footer_style'>
                <div><img src={logo} alt="Logo Kasa" title="Logo Kasa" /></div>
                <div><p>© 2020 Kasa. All rights reserved</p></div>
            </div>
        </footer>
    );
};

export default Footer;