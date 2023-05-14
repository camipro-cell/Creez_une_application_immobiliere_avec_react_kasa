import './header.css'
import logo from '../../assets/logokasa.png'
import { Link } from 'react-router-dom'

function Header() {
    return ( 
    <header>
    <img src={logo} alt="Logo Kasa" title="Logo Kasa" />
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
        </ul>
    </nav>
    
    </header>
    )
}

export default Header;