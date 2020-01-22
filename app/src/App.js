import React from 'react';

import './App.css';

import MoviesList from './components/MoviesList';
import MouseMoveContainer from './components/MouseMoveContainer';

function App() {
  useEffect(() => {
		// When the component mounts (after rendering to the DOM)
		// Side effects live here
		console.log('App component mounted.');

		return () => {
			// When the component unmounts (after component is removed from the DOM)
			// The final side effect we want to run
			console.log('App component unmounting...');
		}
	}, 
	[
		// Variables that we want to watch for changes
	]);
	return (
		<div className="App">
			<header>
				<h1>React Components III</h1>
			</header>
			{/* <MoviesList /> */}
			<MouseMoveContainer />
		</div>
	);
}

export default App;