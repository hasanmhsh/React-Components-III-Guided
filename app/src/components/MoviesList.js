import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function MoviesList() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films/')
      .then(res => {
        console.log(res.data);
        setFilms(res.data);
      })
      .catch(err => {
        console.log('The data was not returned', err);
      })
  }, []);
  // ☝️ The empty dependency array prevents infinite loops
    // It fires the effect hook on the first component mount
    
    // Hester
  useEffect(() => {
    axios
        .get('https://ghibliapi.herokuapp.com/people/')
        .then(response => {
            console.log('people', response.data);
            setPeople(response.data);
        })
        .catch(error => {
            console.log('error', error);
        });
    }, []);
	return (
		<div className="movies-container">
      {
        films.map(film => {       
          return <MovieCard
            key={film.id}
            description={film.description}
            title={film.title}
            release_date={film.release_date}
            director={film.director}
          />
        })
      }
		</div>
	);
}

export default MoviesList;