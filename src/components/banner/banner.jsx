import './banner.css'
import logo from '../../assets/imgbanner.png'

function Banner() {
    return (
        <div className='space_top_main_in_banner'>
            <h1 className='title_banner'>Chez vous, partout et ailleurs</h1>
            <img className='img_banner' src={logo} alt="Paysage nature" title="Paysage" />
        </div>
    )
}

export default Banner;
