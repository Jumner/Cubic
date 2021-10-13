import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './index.css';
import { Tab } from '@headlessui/react';

ReactDOM.render(
	<div>
		<Tab.Group vertical>
			<Tab.List>
				<Tab key="home">Home</Tab>
				<Tab key="main">Main</Tab>
				<Tab key="telem">Telemetry</Tab>
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel key="home">
					<Home />
				</Tab.Panel>
				<Tab.Panel key="main">Main panel</Tab.Panel>
				<Tab.Panel key="telem">Data panel</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	</div>,
	document.getElementById('root')
);
