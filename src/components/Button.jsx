import React from 'react';

function Button({ handleClick, text, id, tweet }) {
	return (
		<>
			{id === 'tweet-quote'
				? (
					<a
						href={`https://twitter.com/intent/tweet?text=${tweet}`}
						target="_blank"
						rel="noreferrer"
					>
						<button>
							{text}
						</button>
					</a>
				)
				: (
					<button onClick={handleClick} id={id}>
						{text}
					</button>
				)
			}
		</>
	)
};

export default Button;