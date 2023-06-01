import React from 'react';
import { useState, useEffect } from "react";
import image from '../assets/imgbannerabout.png'
import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';

function About() {

	const [aboutData, setAboutData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/about.json")
			.then(function (response) {
				return response.json()
			})
			.then(function (json) {
				setAboutData(json);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<main>
			<section>
				<div className='banner-style-in-about-page'>
					<Banner
						image={image}
					/>
				</div>
			</section>
			<section>
				{aboutData && aboutData.length > 0 && aboutData.map((data, index) =>
					<div className='style-collapse-in-about-page' key={index}>
						<Collapse
							title={data.title}
							content={data.content}
						/>
					</div>
				)}
			</section>
		</main>
	);
};

export default About;