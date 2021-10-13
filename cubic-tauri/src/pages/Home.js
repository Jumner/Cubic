import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className="Home bg-blend-color">
			<p
				onClick={() => {
					window.location = '/jeff';
				}}
			>
				testtest
			</p>
		</div>
	);
}

export default Home;
