import React from 'react';

function Wrapper({ children, id }) {
	return (
		<div id="quote-box">
			{children}
		</div>
	)
};

export default Wrapper;