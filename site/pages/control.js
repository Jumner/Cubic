import { Heading, Image, Link, Text } from '@chakra-ui/react';
import TT from './components/helper';
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
				as it{"'"}s what helped me (Plus a bunch of uni profs put their lectures
				on youtube for free!)
			</Text>
			<Heading>Generalizing back to 3D</Heading>
			<Text>
				This system is pretty simple because the 3 dimensional problem is just 3
				2D problems at the same time. Though it is not technically the same
				because of how rotations work, the idea of control theory is that it is
				accurate at its set point and the system understands roughly how to
				correct for errors and is able to deal with errors in the
				generalization. Because no model is perfect, the whole idea of control
				is to stitch a simplified model in with the complexities of the real
				world. For an extreme example, no model will account for me randomly
				deciding to poke it. A good example of these generalizations are the
				torque from gravity. In reality it is proportional to the sin of the
				current angle. In the simplified model, it is just proportional to the
				angle itself not the sin of the angle. These are not the same thing, but
				they look the same when the angle is near 0. As it differs, the error
				increases. The controller will be able to account for this as long as it
				is not too extreme. Thankfully, this system does not need a more complex
				algorithm such as gain scheduling (Such as what airplanes use), or a
				nonlinear control algorithm. In theory, A nonlinear algorithm could be
				used.
			</Text>
			<Heading>Control algorithms</Heading>
			<Text>
				The control algorithm used here is a Linear Quadratic Regulator (LQR).
			</Text>
			<Text>
				Let{"'"}s break this down. Linear -{'>'} the{' '}
				<TT label="the torque for the motor to apply">input</TT> is a linear
				combination of the{' '}
				<TT label="The current 'state' of the system. All the variables that we're trying to control">
					state
				</TT>
				. This means that the system input torque is equal to the angle of the
				cube multiplied by some number. Plus the angular velocity of the cube
				multiplied by some other number. Plus the angular velocity of the wheel
				times some other number. Now because of this system, you can tune these
				numbers like a{' '}
				<TT label="A simple control algorithm where the output is equal to the error times a gain (kp), plus the integral of the error times a gain (ki), plus the derivative of the error times a gain (kd). It requires a lot of manual tuning">
					PID
				</TT>{' '}
				loop (More like a PD). Storing these number can get out of hand. So
				instead of storing all these numbers normally, they are stored in a
				matrix called the K or gain matrix. Quadratic -{'>'} the numbers in the
				matrix are not chosen by random, they are selected to optimise a
				function related to the system. The math works like this. What gain
				matrix (k) will optimise a function if the input torques are equal to
				the negative of the state times the gain matrix (u = -Kx). The function
				that it minimizes is a quadratic cost function. The function is equal to
				the state (remember a state of all zeros is the goal) squared plus the
				inputs (the effort that was put in) squared. This simple function
				creates great complexity. One of the reasons its a quadratic function
				and not a linear function (Just your error plus your inputs) is because
				of something called actuator saturation. This means that the control
				algorithm doesn{"'"}t know the limits of your actuators (It has no idea
				how much torque the motors can produce). A linear linear regulator would
				try to produce infinite torque for an infinitesimally small period of
				time to correct. A quadratic cost function means that doubling actuator
				input quadruples cost this makes it make much more reasonable control
				inputs. Of course there are also algorithms that consider saturation.
			</Text>
			<Heading>The possibility of nonlinear control</Heading>
			<Text>
				Because each axis is independent, the 9 state system can be represented
				as 3, 3 state systems. The problem with nonlinear control is that
				computationally cheap methods are not always available and otherwise
				they get exponentially computationally expensive. So a 3 state system is
				fairly easy to compute where a 9 state system may be out of reach. In
				this case, Both options are available so there is certainly room to
				expand this in the future as I get more conformable with control theory.
			</Text>
			<Text>
				In fact, I found 2 papers on the nonlinear control of more complex
				versions of this system. Check out{' '}
				<Link
					href="https://muhendislik.cu.edu.tr/storage/Dergi/(35-1-2020)/04.pdf"
					color="site.green.500"
				>
					This one
				</Link>{' '}
				and{' '}
				<Link
					href="https://www.matthewpeterkelly.com/research/ICRA_2015/icra2015_kellyRuina.pdf"
					color="site.green.500"
				>
					This one
				</Link>
				. They are both super good reads and I are super interesting.
			</Text>
			<Heading>State estimation</Heading>
			<Text>
				Because of the limitations of the atmega328p that is being used as the
				main computer, there is very little memory left for optimal state
				estimators like the classic Kalman filter. I fully implemented a Kalman
				filter but there simply was not enough memory to run it. So instead, I
				needed to get clever. There are only really 3 states and 1 copy for each
				of the 3 axis to make 9. The three are the current angle, the current
				angular rate, and the wheels angular rate. Since slowing down the wheel
				is not mission critical, it has a very small effect on the actuator
				input and so can be pretty much ignored. Then the angular rate has a
				much larger effect. But the data from the IMU is rock steady and does
				not cause any oscillations. Finally for the angles, I used a very simple
				algorithm. All it does is combine the predicted angle using the previous
				angle and the measured angular velocity with the measured angle which
				uses trig and the accelerometer readings. Using the prediction alone
				will lead to drift and the raw measurement is super noisy. Combining
				them leads to lightning quick response, zero drift, and zero noise.
				Instead of using the awesome math in a kalman filter to dynamically set
				the proportions, I just set it manually to roughly 80% prediction to 20%
				measurement and it gives great results.
			</Text>
		</Page>
	);
}
