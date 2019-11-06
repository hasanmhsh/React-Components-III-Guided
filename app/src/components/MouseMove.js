import React, { useEffect, useState } from 'react';

function MouseMove() {
	// const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// Add side effects here
	}, []);

	return (
		<h1>
			<strong>x: </strong>
			{position.x} <strong>y: </strong>
			{position.y}
		</h1>
	);
}

export default MouseMove;
