import React from 'react';
import './header.css';
import logo from '../../assets/logokasa.png';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
    <div className='header_style'>
        <h1><Link to="/"><img src={logo} alt="Logo Kasa" title="Logo Kasa" /></Link></h1>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li className='space_nav_link_about'><Link to="/about">À Propos</Link></li>
            </ul>
        </nav>
    </div>
    );
};

export default Header;