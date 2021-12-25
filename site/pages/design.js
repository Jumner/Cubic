import { Heading, Image, Text } from "@chakra-ui/react";
import Page from "./components/Page";
import Render from "./../public/img/finalrender.png";
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
        The solution is to build it in multiple peices, 112 peices to be exact.
      </Text>
	<Text></Text>
    </Page>
  );
}
