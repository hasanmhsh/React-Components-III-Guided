import React, { useEffect, useState } from 'react';

function MouseMove() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
    console.log('Component mounted.');
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log({ x: e.clientX, y: e.clientY });
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    // Add side effects here
    return () => {
      console.log('component unmounting...');
      window.removeEventListener('mousemove', handleMouseMove)
    }
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
