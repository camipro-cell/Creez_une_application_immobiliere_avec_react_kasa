import React from 'react';
import { useState, useEffect } from "react";
import './LodgingList.css';
import CardOfLodging from '../CardOfLodging/CardOfLodging';

function LodgingList() {

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
		<div className="lodging_list">
			{ lodgings && lodgings.length > 0 && lodgings.map((lodging) =>
				<CardOfLodging
					key={lodging.id}
					id={lodging.id}
					title={lodging.title}
					cover={lodging.cover}
				/>
			)}
		</div>
	);
};

export default LodgingList;
