import React from 'react';
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';
import datasAboutCollapse from '../../data/datacollapse'

function About() {
   return (
      <main>
         <section>
            <Banner />
         </section>
         <section>
            {datasAboutCollapse.map((data) => {
					return (
						<div key={data.id}>
							<Collapse 
                        title={data.title} 
                        description={data.description} 
                     />
						</div>
					);
              }
				 )
           }
       </section>
       </main>
   );
}

export default About;