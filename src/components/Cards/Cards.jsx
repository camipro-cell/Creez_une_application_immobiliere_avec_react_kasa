import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

function Cards(props) {
    return (
            <article className='cards_in_gallery'>
                <Link to={`/logement/${props.id}`}>
                    <img src={props.cover} alt={props.title} title={props.title} />
                    <h3>{props.title}</h3>
                </Link>
            </article>
    );
};

export default Cards;