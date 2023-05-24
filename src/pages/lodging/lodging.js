import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import './lodging.css'
import datas from '../../data/data';
import Collapse from '../../components/collapse/collapse';
import Slider from '../../components/slider/slider';
import redstar from '../../assets/redstar.png';
import greystar from '../../assets/greystar.png';

function Lodging() {
	
      /* Extract the URL parameter ID value named 'id' from the data.js file */
      const idLodging = useParams('id').id;

      /* The find function is used to find the lodging in the data.js file whose ID corresponds to idLodging. 
      The found object is then assigned to lodgingData. */
	   const [lodgingData] = useState(datas.find(data => data.id === idLodging));

      /* Initialization of isPicture as empty value */
      const [isPicture, setIsPicture] = useState([]);
	
      /* With useEffect,  the filter method on the datas array is used to find the lodging whose ID corresponds
      to idLodging. The picture value of this slot is then assigned to isPicture using the setIsPicture function. 
      This updates the isPicture value with the images corresponding to the found lodging. */
      useEffect(() => {
		      const [filterDataLodging] = datas.filter(data => data.id === idLodging);
		      setIsPicture(filterDataLodging.pictures);
	      }, 
         [idLodging]
      );
      
      /* Creation of the 'renderStars' function with an empty array to store the star images corresponding to the rating assigned to each lodgng. */
      const renderStars = () => {
         const stars = [];
            for (let i = 1; i <= 5; i++) {
               const starImage = i <= lodgingData.rating ? redstar : greystar;
               stars.push(
                  <img
                     className='star_style'
                     key={i}
                     src={starImage}
                     alt="Lodging of rating"
                     title="Number of stars for accommodation"
                  />
               );
            }
         return stars;
      };
      
      return (
		   <main>
            <section>
               <div>
                  <Slider
                     pictures={isPicture}
                  />
               </div>
            </section>
            <section>
               <div className='space_beetween_title_and_host_information'>
                  <div>
                     <h2 className='lodging_title_in_lodging_page'>{lodgingData.title}</h2>
                     <p className='location_of_lodging'>{lodgingData.location}</p>
                     <div className='button_tag_style'>
					         {lodgingData.tags.map((tag, index) => {
						               return (
								            <button key={index}>{tag}</button>
						               );
						            }
                           )
                        }
				         </div>
                  </div>
                  <div>
                     <div className='host_informations'>
                        <p>{lodgingData.host.name}</p>
                        <img src={lodgingData.host.picture} alt="Accommodation host" title="Picture of host" />
                     </div>
                     <div className="stars_of_accommodation">
                        {renderStars()}
                     </div>
                  </div>
               </div>
               <div className='style_collapse_in_lodging_page'>
					   <Collapse 
                     title={'Description'} 
                     content={lodgingData.description} 
                  />	
					   <Collapse className='style_collapse_equipments'
                     title={'Équipements'} 
                     content={lodgingData.equipments.map((equipment, index) => (
                        <div className='details_equipments' key={index}>{equipment}</div>
                      ))}
                  />
				   </div>
            </section>
		   </main>	
	   );
   };

export default Lodging;