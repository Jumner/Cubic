import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className="Home">
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
