// import React from 'react';
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './Home.css';

function Box(props) {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.004));
	return (
		<mesh {...props} ref={mesh}>
			{' '}
			<boxGeometry args={[3, 3, 3]} /> <meshStandardMaterial color={0xff6000} />{' '}
		</mesh>
	);
}

function Home() {
	return (
		<div className="flex min-h-screen justify-center items-center">
			<div className="absolute top-0 bottom-0 right-0 left-64">
				<Canvas>
					<ambientLight intensity={0.3} />
					<spotLight position={[0, 10, 0]} intensity={1.5} angle={Math.PI} />
					<spotLight
						position={[0, -10, 0]}
						angle={Math.PI}
						lookAt={[0, 0, 0]}
					/>
					<Box position={[0, 0, 0]} />
				</Canvas>
			</div>

			<div className="grid grid-rows-2 gap-10 min-w-full min-h-screen">
				<p onClick={() => {}}>Overview</p>
			</div>
		</div>
	);
}

export default Home;
