import React from 'react';
import { useState, useEffect } from "react";
import './Home.css'
import Banner from "../../components/Banner/Banner";
import image from '../../assets/imgbannerhome.png';
import Card from '../../components/Card/Card';

function Home() {
	const [lodgings, setLodgings] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/lodgings.json")
			.then(function (response) {
				return response.json()
			})
			.then(function (json) {
				setLodgings(json);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<main>
			<section>
				<div className='banner-style-in-home-page'>
					<Banner
						title={'Chez vous, partout et ailleurs'}
						image={image}
					/>
				</div>
			</section>
			<section>
				<div className="lodging-list">
					{lodgings && lodgings.length > 0 && lodgings.map((lodging) =>
						<Card
							key={lodging.id}
							id={lodging.id}
							title={lodging.title}
							cover={lodging.cover}
						/>
					)}
				</div>
			</section>
		</main>
	);
};

export default Home;

