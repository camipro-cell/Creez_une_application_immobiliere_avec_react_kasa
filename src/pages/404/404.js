import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'

function Error() {
    return ( 
        <main>
            <h2 className='title_error'>404</h2>
            <p className='p_error'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='link_error' to="/">Retourner sur la page d'accueil</Link>
        </main>
        );
}

export default Error;