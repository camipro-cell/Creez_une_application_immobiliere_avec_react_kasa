import './footer.css'
import logo from '../../assets/logofooter.png'

function Footer() {
    return ( 
    <footer>
        <div><img src={logo} alt="Logo Kasa" title="Logo Kasa" /></div>
        <div><p>© 2020 Kasa. All rights reserved</p></div>
    </footer>
    )
}

export default Footer;