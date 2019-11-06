import React from 'react';

const MovieCard = props => {
	return (
		<div className="movie-card" key={props.id}>
			<h2>
				{props.title} ({props.release_date})
			</h2>
			<div className="content">
				<p className="description">{props.description}</p>
				<p>
					<strong>Director: </strong>
					{props.director}
				</p>
				<p>
					<strong>Release Date: </strong>
					{props.release_date}
				</p>
			</div>
		</div>
	);
};
export default MovieCard;
