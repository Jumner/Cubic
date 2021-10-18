import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Status from './pages/Status';
import {
	CubeIcon,
	ChartBarIcon,
	TerminalIcon,
	ChipIcon,
	CheckCircleIcon,
	XCircleIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/solid';
import { listen } from '@tauri-apps/api/event';
import { invoke } from '@tauri-apps/api/tauri';
import './index.css';

let recieveTelem = {};

export function setTelemCallback(key, fn) {
	recieveTelem[key] = fn;
}

function Main() {
	// Tauri

	// const [cubic, setCubic] = useState(0);

	useEffect(() => {
		// Tauri 😍
		const browser = () => {
			// Running in browser makes debugging easier
			console.log('Running in browser');
			setConnected(-1); // Let the ui know
		};
		listen('ping', e => {
			console.log('Ping!', e);
			setConnected(e.payload);
		}).catch(browser);
		invoke('ping').catch(browser);
		// Cubic State
		listen('telemetry', e => {
			console.log('Received packet!', e);
			console.log(recieveTelem);
			for (let key in recieveTelem) {
				recieveTelem[key](e.payload);
			}
		}).catch(browser);
	}, []);

	// Gui
	const [SideBar, setSideBar] = useState(0);
	function selected(i) {
		return i === SideBar ? 'bg-gray-600 text-gray-100 ' : 'text-gray-400 ';
	}
	function NavButton(props) {
		return (
			<button
				onClick={() => {
					setSideBar(props.num);
					if (props.onClick) props.onClick(); // 😘
				}}
				className={
					selected(props.num) +
					'flex items-center p-2 my-6 transition-colors hover:text-white hover:bg-gray-600 duration-200 rounded-lg'
				}
			>
				{React.cloneElement(props.children, {
					width: '20',
					height: '20',
					fill: props.children.props.fill
						? props.children.props.fill
						: 'currentColor',
					className: 'm-auto',
				})}
				<span className="mx-4 text-lg font-normal">{props.text}</span>
			</button>
		);
	}
	const [Connected, setConnected] = useState(0);
	const pages = [<Home />, <>a</>, <>b</>, <Status connected={Connected} />];
	return (
		<div className="relative bg-gray-800">
			<div className="container">
				<div className="w-64 h-screen float-left bg-gray-800">
					<div className="flex items-center justify-start mx-6 mt-10">
						<CubeIcon width="30" className="ml-1 text-gray-300" />
						<span className="text-gray-300 ml-4 text-2xl font-bold">Cubic</span>
					</div>
					<nav className="mt-10 px-6 ">
						<NavButton num="0" text="Overview">
							<ChipIcon />
						</NavButton>
						<NavButton num="1" text="programming">
							<TerminalIcon />
						</NavButton>
						<NavButton num="2" text="Telemetry">
							<ChartBarIcon />
						</NavButton>
						<NavButton num="3" text="Status">
							{Connected <= 0 ? (
								<ExclamationCircleIcon fill="#FFAA88" />
							) : Connected === 1 ? (
								<XCircleIcon fill="#ff9999" />
							) : (
								<CheckCircleIcon fill="#99ff99" />
							)}
						</NavButton>
					</nav>
				</div>
			</div>
			<Page>{pages[SideBar]}</Page>
		</div>
	);
}

function Page(props) {
	return <div className="h-screen bg-gray-600">{props.children}</div>;
}

ReactDOM.render(<Main />, document.getElementById('root'));
