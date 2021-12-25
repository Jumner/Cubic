import { Heading, Image, Text } from '@chakra-ui/react';
import Page from './components/Page';
import Render from './../public/img/finalrender.png';
import MountRender from './../public/img/mountrender.png';
export default function Design() {
	return (
		<Page name="Design">
			<Heading fontSize="6xl">Design</Heading>
			<Text fontSize="large">
				Because this of the nature of this project, everything needed to be
				designed from scratch
			</Text>
			<Image src={Render.src} w="lg" alt="Render" />
			<Text>
				Because of the size of the motors, the minimum size of cube is 150mm.
				This is a problem because the whole thing needs to be 3d printed and my
				3d printer has a max size of 120mm
			</Text>
			<Text>
				The solution is to build it in multiple pieces, 112 pieces to be exact.
			</Text>
			<Text>
				The Cube is designed to be 2 inner cubes; like a tesseract. This is
				because the motors are mounted by their face, so a plate needs to
				connect to the motors and go around the wheels.
			</Text>
			<Heading>Check out this render to see how the motors mount</Heading>
			<Image src={MountRender.src} w="lg" alt="Mount Render" />
			<Text>
				There are then corner pieces that connect the face together ans snap
				together. In order to keep the it from falling apart, corner covers are
				printed in tpu (A rubber like thermoplastic)
			</Text>
			<Text>
				To see how it is assembled, check out this nice loopable gif I made.
			</Text>
		</Page>
	);
}
