import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MoviesList() {
  const [films, setFilms] = useState([]);
  
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
	return (
		<div className="movies-container">
			
		</div>
	);
}

export default MoviesList;