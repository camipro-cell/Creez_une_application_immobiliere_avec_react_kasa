import React from 'react';
import { useParams } from "react-router-dom";
import './lodging.css'
import datas from '../../data/data';
import Collapse from '../../components/collapse/collapse';
import Carousel from '../../components/carousel/carousel';
import redstar from '../../assets/redstar.png';
import greystar from '../../assets/greystar.png';



function Lodging() {
	const idLodging = useParams('id').id;
	const datasOfLodging = datas.filter(data => data.id === idLodging);
	const picturesOfLodging = datas.filter(data => data.id === idLodging);
	return (
		<main>
         <section>
         <div>
                    <Carousel
                pictures={picturesOfLodging[0].pictures}
                title={picturesOfLodging[0].title}
             />
         </div>
       
         </section>
         <section>
            <h2 className='lodging_title_in_lodging_page'>{datasOfLodging[0].title}</h2>
            <p className='location_of_lodging'>{datasOfLodging[0].location}</p>
            <div className='position_tag_and_host_picture'>
               <div>
					   {datasOfLodging[0].tags.map((tag, index) => {
						      return (
								   <button key={index}>{tag}</button>
						         );
						      }
                     )
                  }
				   </div>
               <div>
                  <div className='host_informations'>
                    <p>{datasOfLodging[0].host.name}</p>
                    
                    
                    <img src={datasOfLodging[0].host.picture} alt="Accommodation host" title="Picture of host" />
                  </div>
                  <div className="stars_of_accommodation">
						   {[...Array(5)].map((ratingstar, index) => {
                        const lodgingRating = index + 1;
								      return (
									      <img className='star_style' key={index} src={lodgingRating <= datasOfLodging[0].rating ? redstar : greystar} alt="Lodging of rating" title="Number of stars for accommodation" />
								      );
							      }
                        )
                     }
                  </div>
               </div>
            </div>
				<div>
					<Collapse 
                  title={'Description'} 
                  content={datasOfLodging[0].description} 
               />	
					
					<Collapse
                  title={'Équipements'} 
                  content={datasOfLodging[0].equipments}
               />
				</div>
         </section>
		</main>	
	);
}

export default Lodging;