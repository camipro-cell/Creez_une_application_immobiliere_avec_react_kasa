import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import './Lodging.css';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import redstar from '../../assets/redstar.png';
import greystar from '../../assets/greystar.png';

function Lodging() {
	
	/* Extract the URL parameter ID value named 'id' from the data.js file */
	const idLodging = useParams('id').id;
	const navigate = useNavigate();

	const [lodging, setLodging] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/lodgings.json")
		.then(function(response) {
			console.log(response)
			return response.json()
		})
		.then(function(json) {
			const data = json.find(data => data.id === idLodging) || null;
			if(data === null) {
				return navigate("/404");
			} else {
				setLodging(data);
			}
		})
		.catch(function(e) {
			console.log(e);
		});
	}, [idLodging, navigate]);

	// Creation of the 'renderStars' function with an empty array to store the star images corresponding to the rating assigned to each lodgng.
	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			const starImage = i <= lodging.rating ? redstar : greystar;
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
			{lodging && (
				<div>
					<section>
						<div>
							<Gallery
								pictures={lodging.pictures}
								title={lodging.title}
							/>
						</div>
					</section>
					<section>
					<div className='informations_of_lodging'>
						<div>
							<h2 className='lodging_title_in_lodging_page'>{lodging.title}</h2>
							<p className='location_of_lodging'>{lodging.location}</p>
							<div className='button_tag_style'>
								{lodging.tags && lodging.tags.length > 0 && lodging.tags.map((tag, index) =>
									<button key={index}>{tag}</button>
									)
								}
							</div>
						</div>
						<div className='host_infomations_and_star'>
							<div className='host_informations'>
								<div>
									<p>{lodging.host.name.split(' ')[0]}</p>
                					<p>{lodging.host.name.split(' ')[1]}</p>
								</div>
								<img src={lodging.host.picture} alt="Accommodation host" title="Picture of host" />
							</div>
							<div className="stars_of_lodging">
								{ renderStars() }
							</div>
						</div>
					</div>
						<div className='style_collapse_in_lodging_page'>
							<Collapse
								title={'Description'}
								content={lodging.description}
							/>
							<Collapse className='style_collapse_equipments'
								title={'Équipements'}
								content={lodging.equipments && lodging.equipments.length > 0 && lodging.equipments.map((equipment, index) => (
									<div className='details_equipments' key={index}>{equipment}</div>
								))}
							/>
						</div>
					</section>
				</div>
			)}
		</main>
	);
};

export default Lodging;