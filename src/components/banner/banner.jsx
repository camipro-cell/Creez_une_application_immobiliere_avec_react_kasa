import React from 'react';
import './banner.css'
import logo from '../../assets/imgbanner.png'

function Banner() {
    return (
        <div className='banner_style_home'>
            <h2 className='title_banner_home'>Chez vous, partout et ailleurs</h2>
            <img className='img_banner_home' src={logo} alt="Paysage nature" title="Paysage" />
        </div>
    )
}

export default Banner;
