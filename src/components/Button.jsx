import React from 'react';

function Button({ handleClick, text, id, tweet }) {
	return (
		<>
			{id === 'tweet-quote'
				? (
						<button>
					<a
						href={`https://twitter.com/intent/tweet?text=${tweet}`}
						target="_blank"
						rel="noreferrer"
						id={id}
					>
							{text}
					</a>
						</button>
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