import React, { useState } from 'react';

import MouseMove from './MouseMove';

function MouseMoveContainer() {
  const [display, setDisplay] = useState(false);

  return (
		<div className="mousemove-container">
			<button onClick={() => setDisplay(!display)}>
				Toggle MouseMove Component
			</button>
			{display && <MouseMove />}
		</div>
	);
}

export default MouseMoveContainer;