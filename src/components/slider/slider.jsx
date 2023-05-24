import './slider.css'; 
import { useState } from "react";
import arrowprevious from '../../assets/arrowprevious.png';
import arrownext from '../../assets/arrownext.png'
import './slider.css';


function Slider({ pictures }) {
  /* Setting thisIndex status to 0 */
  const [thisIndex, setThisIndex] = useState(0);
    
  /* If index is equal to 0, 
  then we return to the last image when clicking on previous arrow. 
  Otherwise we return at index of the previous image. */
  const prevSlide = () => {
      setThisIndex(thisIndex === 0 ? pictures.length - 1 : thisIndex - 1);
  };
  
  /* If index is equal to index of the last image, 
  then we return to the first image  when clicking on next arrow. 
  Otherwise we return at index of the next image. */
  const nextSlide = () => {
      setThisIndex(thisIndex === pictures.length - 1 ? 0 : thisIndex + 1);
  };

      return (
          /* A background image for the lodging is visible */
          /* If the lodging has several images, it will be possible to view them 
          when clicking on the corresponding arrows that will appear,
          and a counter with the number of images will be visible */
          <div className='style_of_background_image' style={{ backgroundImage: `url(${pictures[thisIndex]})` }}>
              {pictures.length > 1 && (
                      <>
                        <div className='arrow_position_to_switch'>
                            <img
                              className='arrow_previous'
                              src={arrowprevious}
                              alt="previous visual"
                              onClick={prevSlide}
                            />
                            <img
                              className='arrow_next'
                              src={arrownext}
                              alt="next visual"
                              onClick={nextSlide}
                            />
                        </div>
                          <p className='counter'>{thisIndex + 1} / {pictures.length}</p>
                      </>
                  )
              }
          </div>
      );
  };

export default Slider;