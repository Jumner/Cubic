import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text,
} from '@chakra-ui/react';
import Page from './components/Page';

function Item({ title, children }) {
	return (
		<AccordionItem>
			<Heading>
				<AccordionButton>
					<AccordionIcon></AccordionIcon>
					<Box>{title}</Box>
				</AccordionButton>
			</Heading>
			<AccordionPanel>{children}</AccordionPanel>
		</AccordionItem>
	);
}

export default function Challenges() {
	return (
		<Page name="Challenges">
			<Heading fontSize="6xl">Challenges</Heading>
			<Text fontSize="large">
				A list of all the challenges I have faced and how I overcame them.
			</Text>
			<Text fontSize="large">
				This has been the single most difficult thing I have ever done. So there
				are a lot of problems I had.
			</Text>
			<Accordion allowMultiple="true" w="full" p="10">
				<Item title="IMU digital motion processor">
					The chip I used to measure rotation is packed with a {'"'}computer
					{'"'} which takes the gyroscope (rotation speed) and accelerometer
					(acceleration) measurements and figures out the current orientation.
					The problem is that this chip is designed for smartphones. So the
					state estimator is tuned for stability instead of quick response. This
					meant that errors could quickly accumulate and would take 10-15
					seconds to dissipate. As you might expect, this caused serious issues.
					Sadly the algorithm is fully proprietary and a 2$ chip is not going to
					let you tune it. Instead I was forced to make my own state estimator
					to determine orientation. I settled on a pretty simple solution, a
					very simple linear estimator. All it does is use the gyro measurements
					and previous orientation estimate to predict where it should be (this
					is called the a priori, its more useful for real optimal state
					estimators). The problem is that this can drift leading to big
					problems. The solution is to use the accelerometer measurements and
					assume they{"'"}re only gravity, then trig can be used to measure
					orientation. This is not perfect but if your estimated orientation
					takes both components, it will be super stable, but also super
					responsive even if it is 90% prediction 10% measurement.
				</Item>
			</Accordion>
		</Page>
	);
}
