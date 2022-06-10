import { Center, Heading, Box } from '@chakra-ui/react';
import DrumPad from './components/DrumPad';

function App() {
	return (
		<Center bg="purple.400" h="100vh" id="drum-machine">
			<Box bg="purple.200" p={{ base: '5', md: '10' }} w={{ base: '95vw', md: '80vw' }} borderRadius="1rem">
				<Heading
					textAlign="center"
					bgGradient="linear(to-l, pink.100, pink.200)"
					bgClip="text"
					fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
					fontWeight="extrabold"
					pb={{ base: '5', md: '10' }}
				>
					DRUM MACHINE
				</Heading>
				<DrumPad />
			</Box>
		</Center>
	);
}

export default App;
