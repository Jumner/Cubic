import React, { useEffect, useState } from 'react';

import { Legend, Line, LineChart, Tooltip, YAxis } from 'recharts';
import { setTelemCallback } from './index';

export function Graph() {
	const [data, setData] = useState([]);
	function addData(data) {
		setData(oldData => {
			return [...oldData, data].slice(oldData.length >= 5 ? 1 : 0);
		});
	}
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
		<div className="bg-gray-800 shadow-lg rounded-xl p-4 m-8">
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
