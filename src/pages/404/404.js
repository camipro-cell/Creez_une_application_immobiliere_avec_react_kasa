import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'

function Error() {
    return ( 
        <main>
            <h2 className='title-error'>404</h2>
            <p className='p-error'><span>Oups! La page que</span> <span>vous demandez n'existe pas.</span></p>
            <Link className='link-error' to="/">Retourner sur la page d'accueil</Link>
        </main>
        );
};

export default Error;