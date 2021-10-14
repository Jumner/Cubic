import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './Home.css';

function Box(props) {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.004));
	return (
		<mesh {...props} ref={mesh}>
			<boxGeometry args={[3, 3, 3]} />
			<meshStandardMaterial color={0xff6000} />
		</mesh>
	);
}

function Home() {
	return (
		<>
			<div className="absolute top-0 bottom-52 right-0 left-64">
				<Canvas>
					<ambientLight intensity={0.3} />
					<spotLight position={[0, 10, 0]} />
					<spotLight position={[0, -10, 0]} />
					<Box position={[0, 0, 0]} />
				</Canvas>
			</div>
			<div className="left-64 right-0 absolute bottom-0 h-52">
				<div className="flex items-center justify-around h-full">
					<p onClick={() => {}}>Overview</p>
					<p onClick={() => {}}>Overview</p>
					<p onClick={() => {}}>Overview</p>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

export default Home;
