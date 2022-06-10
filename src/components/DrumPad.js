import { useState } from 'react';
import { Grid } from '@chakra-ui/react';
import Pad from './Pad';
import Display from './Display';

const DrumPad = () => {
	const [ active, setActive ] = useState('---');
	const [ volume, setVolume ] = useState(0.65);

	return (
		<Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(3, 1fr)" gap={{ base: '3', md: '6' }}>
			<Pad code="Q" volume={volume} setActive={setActive} />
			<Pad code="W" volume={volume} setActive={setActive} />
			<Pad code="E" volume={volume} setActive={setActive} />
			<Display active={active} setVolume={setVolume} />

			<Pad code="A" volume={volume} setActive={setActive} />
			<Pad code="S" volume={volume} setActive={setActive} />
			<Pad code="D" volume={volume} setActive={setActive} />

			<Pad code="Z" volume={volume} setActive={setActive} />
			<Pad code="X" volume={volume} setActive={setActive} />
			<Pad code="C" volume={volume} setActive={setActive} />
		</Grid>
	);
};

export default DrumPad;
