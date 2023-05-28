import React from 'react';
import { useState, useEffect } from "react";
import image from '../../assets/imgbannerabout.png'
import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';

function About() {

	const [aboutData, setAboutData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/about.json")
		.then(function(response) {
			console.log(response)
			return response.json()
		})
		.then(function(json) {
			console.log(json);
			setAboutData(json);
		})
		.catch(function(error) {
			console.log(error);
		});
	}, []);

	return (
		<main>
			<section>
				<Banner 
				image={image}
				/>
			</section>
			<section>
				{aboutData && aboutData.length > 0 && aboutData.map((data, index) =>
					<div key={index}>
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