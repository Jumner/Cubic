import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className="App">
			<p
				onClick={() => {
					window.location = '/jeff';
				}}
			>
				jeff
			</p>
		</div>
	);
}

export default Home;
