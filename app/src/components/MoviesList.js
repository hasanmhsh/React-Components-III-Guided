import React, { useState, useEffect } from 'react';

import axios from 'axios';

import MovieCard from './MovieCard';

function MoviesList() {
	const [films, setFilms] = useState([]);
	const [people, setPeople] = useState([]);

	useEffect(() => {
		axios
			.get(`https://ghibliapi.herokuapp.com/films/`)
			.then(response => {
				console.log('/films endpoint: ', response.data);
				setFilms(response.data);
			})
			.catch(error => {
				console.log('the data was not returned', error);
			});
	}, []);

	  useEffect(() => {
			axios
				.get(`https://ghibliapi.herokuapp.com/people/`)
				.then(response => {
					console.log('/people endpoint: ', response.data);
					setPeople(response.data);
				})
				.catch(error => {
					console.log('the data was not returned', error);
				});
		}, []);

	return (
		<div className="movies-container">
			{films.map(film => {
				return (
					<MovieCard
						key={film.id}
						title={film.title}
						description={film.description}
						director={film.director}
						release_date={film.release_date}
					/>
				);
			})}
		</div>
	);
}

export default MoviesList;