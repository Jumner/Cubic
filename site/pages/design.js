import { Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
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
				To see how it was assembled, check out this nice loopable gif I made.
			</Text>
			<Text>
				I then realized that instead of gluing the corners together, they can
				come apart and allow it to be disassembled into 6 faces. This still
				shows how it is constructed.
			</Text>
			<video muted autoPlay controls loop>
				<source src="/img/assemblyLoop.webm" />
			</video>
			<Heading>Now here{"'"}s how it really went</Heading>
			<Text>How the cube was assembled</Text>
			<Image
				src="/img/parts.jpg"
				alt="parts"
				transform="rotate(90deg)"
				borderRadius="2xl"
			/>
			<Text>
				Here are most of the parts laid out. It is missing the wheels as they
				were being manufactured and the corner covers were not printed yet.
				Either way, you can see the frame parts, the motors, the voltage
				converter, the IMU, and arduino, and a bluetooth module so it can send
				telemetry over bluetooth.
			</Text>
			<Text>
				You can see here how the dovetails snap together. You can also see the
				gaps in the corners before the covers pull it together tightly.
			</Text>
			<Image
				src="/img/faceAssembly.jpg"
				alt="Face assembly"
				w="md"
				borderRadius="2xl"
			/>
			<Text>
				You can see here it mostly assembled with all the electronics (besides
				the battery) installed.
			</Text>
			<Image
				src="/img/mostlyAssembled.jpg"
				alt="Mostly assembled"
				w="md"
				borderRadius="2xl"
			/>
			<Text>
				Finally, the TPU corner covers which are glued together. Here you can
				see how they{"'"}re made
			</Text>
			<SimpleGrid columns="2" gap="5">
				<Image
					src="/img/coverFlat.jpg"
					alt="Flat cover"
					w="md"
					borderRadius="2xl"
				/>
				<Image
					src="/img/coverDone.jpg"
					alt="Done cover"
					w="md"
					borderRadius="2xl"
					dropShadow="2xl"
				/>
			</SimpleGrid>
			<Text>Then they just snap overtop of the corners and voila!</Text>
			<Image
				src="/img/cubeDone.jpg"
				alt="cube Done"
				w="md"
				borderRadius="2xl"
			/>
			<Text>
				It turned out fantastic! And looking at it still brings me great joy
				despite the amount of suffering it has put me through.
			</Text>
		</Page>
	);
}
