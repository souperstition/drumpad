import { Center } from '@chakra-ui/react';
import DrumPad from './components/DrumPad';
import Button from './components/Button';

function App() {
	return (
		<Center h="100vh" id="drum-machine">
			<DrumPad />
		</Center>
	);
}

export default App;
