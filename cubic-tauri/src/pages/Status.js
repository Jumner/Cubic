import { BanIcon, ChipIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
// Graphs
import { Legend, Line, LineChart, Tooltip, YAxis } from 'recharts';
import { setTelemCallback } from '../index';
//https://recharts.org/en-US/guide/getting-started

function Status(props) {
	function Message() {
		switch (props.connected) {
			case -1:
				return 'Running in a browser. Run in the standalone app for connectivity.';
			case 0:
				return 'Unable to connect to the backend.';
			case 1:
				return 'Not Connected to Cubic';
			default:
				return 'Unknown error code. Not a good look 😳';
		}
	}
	function Button() {
		if (props.connected !== -1) {
			return (
				<button
					type="button"
					className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
					onClick={() => {
						window.location.reload();
					}}
				>
					Retry Connection
				</button>
			);
		}
		return '';
	}
	function Error() {
		return (
			<div className="shadow-lg rounded-2xl p-4 bg-gray-800 w-64 m-auto">
				<div className="w-full h-full text-center">
					<div className="flex h-full flex-col justify-between">
						<BanIcon
							className="h-12 w-12 mt-4 m-auto text-red-500"
							fill="currentColor"
							viewBox="0 0 24 24"
						/>
						<p className="text-gray-100 py-2 px-6">
							<Message />
						</p>
						<div className="flex items-center justify-between gap-4 w-full mt-8">
							<Button />
						</div>
					</div>
				</div>
			</div>
		);
	}
	function Banner() {
		return (
			<div className="container bg-green-500 flex items-center text-white text-lg font-bold px-4 py-3 self-start absolute w-full">
				<ChipIcon fill="currentColor" className="w-6 h-6 mr-3" />
				Awesome! Connected to Cubic successfully
			</div>
		);
	}
	const [data, setData] = useState([]);
	function addData(data) {
		setData(oldData => {
			return [...oldData, data].slice(oldData.length >= 5 ? 1 : 0);
		});
	}
	function Graph() {
		function telemCallback(val) {
			if (data.length === 0 || val !== data[data.length - 1].a) {
				console.log('Added data', val);
				addData({ name: 't', a: val });
			}
		}
		useEffect(() => {
			console.log('mount graph');
			setTelemCallback('statusGraph', telemCallback);
		}, []);
		return (
			<div className="bg-gray-800 shadow-lg rounded-xl p-4 flex m-auto">
				<LineChart
					width={200}
					height={200}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<Line
						type="monotone"
						dataKey="a"
						dot={false}
						isAnimationActive={true}
					/>
					<YAxis />
					<Tooltip />
					<Legend />
				</LineChart>
			</div>
		);
	}
	function Ui() {
		if (props.connected === 2) {
			return (
				<>
					<Banner />
					<Graph />
				</>
			);
		} else {
			return <Error />;
		}
	}
	return (
		<div className="flex h-full left-0 right-0 items-center relative">
			<Ui />
		</div>
	);
}

export default Status;
