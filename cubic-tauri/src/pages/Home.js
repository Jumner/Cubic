import { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './Home.css';
import { Graph } from '../graph';

function Box(props) {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.004));
	const [Hovered, setHovered] = useState(false);
	const colour = Hovered ? 0x60ff00 : 0xff6000;
	return (
		<mesh
			{...props}
			ref={mesh}
			onPointerOver={() => {
				setHovered(true);
			}}
			onPointerOut={() => {
				setHovered(false);
			}}
		>
			<boxGeometry args={[3, 3, 3]} />
			<meshStandardMaterial color={colour} />
		</mesh>
	);
}

function Home() {
	return (
		<div className="flex h-full relative">
			<div className="absolute h-full w-full">
				<Canvas>
					<ambientLight intensity={0.3} />
					<spotLight position={[0, 10, 0]} />
					<spotLight position={[0, -10, 0]} />
					<Box position={[0, 0, 0]} />
				</Canvas>
			</div>
			<div className="absolute w-full bottom-0">
				<div className="flex items-center justify-around h-full">
					<Graph />
				</div>
			</div>
		</div>
	);
}

export default Home;
