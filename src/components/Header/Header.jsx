import React from 'react';
import './Header.css';
import logo from '../../assets/logokasa.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    return ( 
        <header>
            <div className='header_style'>
                <h1><Link to="/"><img src={logo} alt="Logo Kasa" title="Logo Kasa" /></Link></h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active space_nav_link_home' : ' space_nav_link_home'}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                                À Propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

