import React from 'react';

import './App.css';

import MoviesList from './components/MoviesList';
// import MouseMoveContainer from './components/MouseMoveContainer';

function App() {
	return (
		<div className="App">
			<header>
				<h1>React Components III</h1>
			</header>
			<MoviesList />
			{/* <MouseMoveContainer /> */}
		</div>
	);
}

export default App;