import { Heading, Image, Link, Text } from '@chakra-ui/react';
import Page from './components/Page';

export default function Design() {
	return (
		<Page name="Control">
			<Heading fontSize="6xl">Control</Heading>
			<Text>The fascinating problem of stabilizing complex systems.</Text>
			<Text>
				As I{"'"}ve been learning about control theory, I knew of a few
				algorithms that could be used in this case. However, the first step in
				control is almost always to model your system. In this case, I created a
				state space model.
			</Text>
			<Text>
				The problem is that it is not obvoius how to do this. It just seems
				overwhelmingly difficult. And when you{"'"}re stuck on a problem, it
				helps to solve the simplest variation and then generalize back to the
				original problem.
			</Text>
			<Heading>Solving the 2D case</Heading>
			<Text>
				In order to solve the 3D case, the 2D case should be modeled first. To
				start with this, I drew up a free body diagram. Such clean drawing
				right?
			</Text>
			<Image src="/img/2dSystem.png" alt="2d System" />
			<Text>
				Don{"'"}t worry if you have never seen state space before, it is just a
				way to mathematically represent a system and it allows the use of many
				awesome control algorithms. If you would like to learn about it, check
				out{' '}
				<Link
					href="https://www.youtube.com/watch?v=hpeKrMG-WP0"
					color="site.green.500"
				>
					this video
				</Link>{' '}
				as it{"'"}s what helped me (Plus a bunch of uni profs put their lessons
				on youtube for free!)
			</Text>
		</Page>
	);
}
