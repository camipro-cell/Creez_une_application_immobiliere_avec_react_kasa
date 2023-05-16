import React from 'react';
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';
import datasCollapse from '../../data/datacollapse'

function About() {
   return (
      <main>
         <section>
            <Banner />
         </section>
         <section>
            {datasCollapse.map((data) => {
					return (
						<div key={data.id}>
							<Collapse 
                        title={data.title} 
                        description={data.content} 
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