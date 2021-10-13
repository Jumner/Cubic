import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/jeff">
					<p>jeff lol</p>
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
