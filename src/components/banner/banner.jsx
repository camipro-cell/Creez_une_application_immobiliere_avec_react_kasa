import React from 'react';
import './banner.css'
import logo from '../../assets/imgbannerhome.png'
import Logo from '../../assets/imgbannerabout.png'

function Banner() {
    if (window.location.pathname === '/') {
        return (
            <div className='banner_style_home'>
                <h2 className='title_banner_home'>Chez vous, partout et ailleurs</h2>
                <img className='img_banner_home' src={logo} alt="Paysage nature" title="Paysage" />
            </div>
        );
    }
    else if (window.location.pathname === '/about') {
        return (
            <div className='banner_style_about'>
                <img className='img_banner_about' src={Logo} alt="Paysage ciel bleu" title="Paysage nature" />
            </div>
        );
    }
}

export default Banner;
