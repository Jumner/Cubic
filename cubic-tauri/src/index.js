import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import {
	CubeIcon,
	ChartBarIcon,
	TerminalIcon,
	ChipIcon,
	CheckCircleIcon,
	ExclamationCircleIcon,
	XCircleIcon,
} from '@heroicons/react/solid';
import './index.css';
// https://heroicons.dev/
function Main() {
	const [SideBar, setSideBar] = useState(0);
	function selected(i) {
		return i === SideBar
			? 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100 '
			: 'text-gray-600 dark:text-gray-400 ';
	}
	const pages = [<Home />, <>a</>, <>b</>, <>c</>];
	const [Connected, setConnected] = useState(false);
	return (
		<div className="relative bg-white dark:bg-gray-800">
			<div className="container">
				{/* <div className="flex flex-col sm:flex-row sm:justify-around"> */}
				<div className="w-72 h-screen float-left bg-white dark:bg-gray-800">
					<div className="flex items-center justify-start mx-6 mt-10">
						<CubeIcon width="30" className="ml-1" />
						<span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
							Cubic
						</span>
					</div>
					<nav className="mt-10 px-6 ">
						<button
							onClick={() => {
								setSideBar(0);
							}}
							className={
								selected(0) +
								'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 rounded-lg'
							}
						>
							<ChipIcon
								width="20"
								height="20"
								fill="currentColor"
								className="m-auto"
							/>
							<span className="mx-4 text-lg font-normal">Overview</span>
						</button>
						<button
							onClick={() => {
								setSideBar(1);
							}}
							className={
								selected(1) +
								'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 rounded-lg'
							}
						>
							<TerminalIcon
								width="20"
								height="20"
								fill="currentColor"
								className="m-auto"
							/>
							<span className="mx-4 text-lg font-normal">Programming</span>
						</button>
						<button
							onClick={() => {
								setSideBar(2);
							}}
							className={
								selected(2) +
								'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 rounded-lg'
							}
						>
							<ChartBarIcon
								width="20"
								height="20"
								fill="currentColor"
								className="m-auto"
							/>
							<span className="mx-4 text-lg font-normal">Telemetry</span>
						</button>
						<button
							onClick={() => {
								setSideBar(3);
							}}
							className={
								selected(3) +
								'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 rounded-lg'
							}
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

							<span className="mx-4 text-lg font-normal">Status</span>
						</button>
					</nav>
				</div>
			</div>
			{pages[SideBar]}
		</div>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));
