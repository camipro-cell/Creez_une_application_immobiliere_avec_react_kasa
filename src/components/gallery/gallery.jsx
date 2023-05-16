import React from 'react';
import './gallery.css';
import LodgingCard from '../../components/lodgingcards/lodgingcards';
import datas from '../../data/data'

function Gallery() {
    return (
        <div className='gallery'>
            {datas.map((data) => {
                return (
                    <LodgingCard 
                        key= {data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                );
              }
             )
            }
        </div>
    );
};

export default Gallery;

