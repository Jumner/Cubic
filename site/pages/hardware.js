import { Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import TT from './components/helper';
import Page from './components/Page';

export default function Design() {
	return (
		<Page name="Hardware">
			<Heading fontSize="6xl">Hardware</Heading>
			<Text>This page describes the hardware and electronics of Cubic</Text>
			<Heading>The Microcontroller</Heading>
			<Text>
				As you might expect, a computer is needed to receive inputs from the{' '}
				<TT label="Inertial Measurement Unit (Measures the orientation of the cube)">
					IMU
				</TT>
				and use that to command the motors. This needs to run a{' '}
				<TT label="An algorithm which is able to stabilize an unstable system">
					<Link color="site.green.500" mr="1">
						Control
					</Link>
					algorithm
				</TT>{' '}
				so it must be fully programmable.
			</Text>
			<Text>
				The obvious answer here is to use a{' '}
				<TT label="A chip that is not able to run an operating system like a computer but is able to run code">
					microcontroller
				</TT>
				. In particular, a microcontroller on a development board. These are
				often called arduinos even if they are not arduino branded board. In
				this case, I used an arduino uno which has the atmega328p
				microcontroller on it.
			</Text>
			<Text>
				The only issue is that control algorithms require matrices, and matrices
				can take up a lot of memory. This actually prevented me from using the
				famous linear quadratic state estimator, the{' '}
				<TT label="A super cool algorithm which figures out the most probably estimate given a prediction of known inaccuracy and a measurement of known inaccuracy">
					Kalman filter
				</TT>
				because the atmega328p has only 2kb of memory and each 9x9 matrix is 324
				bytes.
			</Text>
			<Heading>The IMU (Inertial measurement unit)</Heading>
			<Text>
				I used an invensense mpu 6050 development board. This chip is meant for
				smartphones and is a 4mm square packed with a 3 axis{' '}
				<TT label="Measures rotational velocity">gyroscope </TT>, a 3 axis
				<TT label="Measures linear acceleration">accelerometer</TT> and a
				digital motion processor which uses a fancy state estimator to estimate
				the rotation. It communicates with the arduino via a communication
				protocol called i2c. this protocol uses just 2 wires (plus 2 for vcc and
				gnd) and can communicate both ways with the arduino. In this case, the
				interrupt pin is connected as well so the chip can indicate when the
				buffer is ready to be read.
			</Text>
			<Heading>The Motors</Heading>
			<Text>
				For my motors, I selected the nidec 24h. These brushless motors can go
				up to 4000 rpm and are capped at 100 rads/s in my software. They have a
				speed pin and a clockwise/counterclockwise pin which sets the direction
				as well as 2 tachometers. One that pulses 6 times per revolution and one
				that pulses 100 times per revolution. The speed is then measured with
				the latter tachometer and its hooked up as a pinch change interrupt.
				This makes the wheel velocity directly measurable. The speed pin
				communicates via PWM, this is a very simple communication {'"'}
				protocol{'"'}. All it is a square wave which tells the motor what {'"'}
				speed{'"'} to go. See this gif that shows how it works with an led.
			</Text>
			<Image
				src="https://2.bp.blogspot.com/-hz8r3f_Ppog/UXqCysOeP9I/AAAAAAAAAJA/4hGCIl_0atA/s320/pwm_fade.gif"
				alt="pwm"
				w="lg"
			/>
			<Text>
				The problem is that the control system does not ask for a duty cycle but
				a torque value. Therefore, the torque output of the motors needs to be
				characterized for each pwm input. Intuitively I thought that the speed
				of the wheel would also effect the torque. I was right, here is the data
				that allowed me to characterize the motors
			</Text>
			<SimpleGrid columns="2">
				<Image src="/img/rawMotorData.png" alt="Raw Motor Data" />
				<Image src="/img/processedMotorData.png" alt="Processed Motor Data" />
			</SimpleGrid>
			<Text>
				Sure, this third degree polynomial is not a perfect representation of
				the super complex motor dynamics, but it{"'"}s super close and this is
				what control systems are for.
			</Text>
			<Heading>The Power supply</Heading>
			<Text>
				This uses a battery to store energy. It uses a 3 cell, 1500mah,{' '}
				<TT label="Thats 150 amps!">100c</TT>
				lipo. Totally overkill and should allow it to last for over an hour. In
				my testing, this seems to match up. Being 3 cell, it outputs ~12 volts
				and is directly connected to the 12v pin of the motors. To then power
				the 5v onboard{' '}
				<TT label="Electronic Speed Controller. Controls the motor and makes it easy to interact with">
					esc{"'"}s
				</TT>{' '}
				of the motors as well as the arduino, the 12 volt battery is connected
				to a dc to dc buck converter to step it down to 5 volts. Initially, I
				wanted to use an esp32 as the microcontroller, but that would require a
				third 3.3v power rail.
			</Text>
			<Heading>The Wheels</Heading>
			<Text>
				The reaction wheels are how the system is controlled. They act to store
				the torque from the motors to keep them from saturating. Have you ever
				turned on a little dc motor in your hand and it torques your hand a bit?
				Same concept but the problem is that torque will only be produces as
				long as the motor has not reached its max speed. Therefore, you want
				something with a lot of inertia so that it can {'"'}eat{'"'} the torque
				for as long as possible.
			</Text>
			<Text>
				The reason why the mass is concentrated on the outside is to maximize
				the inertia to mass ratio. The more the cube weighs, the more torque is
				needed to correct errors. So mass needs to be reduced as much as
				possible. Think of holding a hammer, if you want it to be as hard to
				spin up to speed as possible, do you spin it from the edge of the
				handle, or the head? You want the mass to be as far out as possible so
				you would hold it by the handle. Same thing here, the mass is as far out
				as possible so it has a greater inertia. Remember that in a solid disk,
				half of the inertia comes from the outer 30%. The problem is that
				plastic wheels would not be dense enough to have adequate control. So
				instead, I got them lasercut out of 304L stainless steel at a local
				metal shop for pretty cheap.
			</Text>
		</Page>
	);
}
