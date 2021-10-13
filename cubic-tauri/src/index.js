import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import {
	CubeIcon,
	ChartBarIcon,
	TerminalIcon,
	ChipIcon,
	CheckCircleIcon,
	XCircleIcon,
} from '@heroicons/react/solid';
import './index.css';
// https://heroicons.dev/
function Main() {
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
				{/* {React.cloneElement(props.children)} */}
				{props.children}
				<span className="mx-4 text-lg font-normal">{props.text}</span>
			</button>
		);
	}
	const pages = [<Home />, <>a</>, <>b</>, <>c</>];
	const [Connected, setConnected] = useState(false);
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
							<ChipIcon
								width="20"
								height="20"
								fill="currentColor"
								className="m-auto"
							/>
						</NavButton>
						<NavButton num="1" text="programming">
							<TerminalIcon
								width="20"
								height="20"
								fill="currentColor"
								className="m-auto"
							/>
						</NavButton>
						<NavButton num="2" text="Telemetry">
							<ChartBarIcon
								width="20"
								height="20"
								fill="currentColor"
								className="m-auto"
							/>
						</NavButton>
						<NavButton
							num="3"
							text="Status"
							onClick={() => {
								setConnected(!Connected);
							}}
						>
							{Connected ? (
								<CheckCircleIcon
									width="20"
									height="20"
									fill="currentColor"
									className="m-auto"
								/>
							) : (
								<XCircleIcon
									width="20"
									height="20"
									fill="currentColor"
									className="m-auto"
								/>
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
