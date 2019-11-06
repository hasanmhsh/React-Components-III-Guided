import React, { useEffect, useState } from 'react';

function MouseMove() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		function handleMouseMove(e) {
			setPosition({ x: e.clientX, y: e.clientY });
			// console.log(position);
		};
    
    console.log('Added mousemove event listener');
		window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      console.log('Cleaned up mousemove event listener');
			window.removeEventListener('mousemove', handleMouseMove);
		};
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
