import './gallery.css';
import LodgingCard from '../../components/lodgingcard/lodgingcard';
import datas from '../../data/data'

function Gallery() {
    return (
        <section className='gallery'>
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
        </section>
    );
};

export default Gallery;

