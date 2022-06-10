import { Grid, GridItem, Center } from '@chakra-ui/react';
import Button from './Button';

const DrumPad = () => {
	return (
		<Grid w="80vw" h="50vh" templateColumns="repeat(6, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
			<Button id="Q" />
			<Button id="W" />
			<Button id="E" />

			<GridItem id="display" rowSpan={3} colSpan={3} bg="blue.500" />

			<Button id="A" />
			<Button id="S" />
			<Button id="D" />

			<Button id="Z" />
			<Button id="X" />
			<Button id="C" />
		</Grid>
	);
};

export default DrumPad;
