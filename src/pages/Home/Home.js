import React from 'react';
import { useState, useEffect } from "react";
import './Home.css'
import Banner from "../../components/Banner/Banner";
import image from '../../assets/imgbannerhome.png';
import Cards from '../../components/Cards/Cards';

function Home() {
    const [lodgings, setLodgings] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/lodgings.json")
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			setLodgings(json);
		})
		.catch(function(error) {
			console.log(error);
		});
	}, []);
    
    return (
    <main>
        <section>
            <Banner 
            title={'Chez vous, partout et ailleurs'}
            image={image}
            />
        </section>
        <section>
            <div className="lodging_list">
                {lodgings && lodgings.length > 0 && lodgings.map((lodging) =>
				        <Cards
					        key={lodging.id}
					        id={lodging.id}
					        title={lodging.title}
					        cover={lodging.cover}
				        />
			        )
                }
            </div>
		</section>
    </main>   
    ); 
};

export default Home;

