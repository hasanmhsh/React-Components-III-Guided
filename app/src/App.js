import React, { useEffect } from 'react';

import './App.css';

import MoviesList from './components/MoviesList';
// import MouseMoveContainer from './components/MouseMoveContainer';

function App(props) {

  useEffect(() => {
    // When the component mounts (after rendering to the DOM)
    // Side effects live here
    console.log('App component mounted.');
    
    return () => {
      // When the component will unmount (just before component is removed from the DOM)
      // Any final side effects will live here
      console.log('App component unmounting...');
    }
  }, [
    // Variables that we want to watch for changes
  ]);

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