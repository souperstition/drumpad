import { useState } from 'react';
import {
	GridItem,
	Center,
	Box,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Text
} from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';

const Display = ({ active, setVolume }) => {
	const [ displayVolume, setDisplayVolume ] = useState(0.65);

	const handleVolumeChange = val => {
		setDisplayVolume(val);
		setVolume(val);
	};

	return (
		<GridItem
			boxShadow="lg"
			borderRadius="0.5rem"
			id="display"
			rowSpan={3}
			colSpan={3}
			bgGradient="linear(to-br, pink.100, purple.100)"
		>
			<Center h="100%">
				<Box w="100%" p="10%">
					<Text
						bg="light.200"
						fontSize={{ base: '2xl', md: '4xl' }}
						textAlign="center"
						color="blue.400"
						my="10"
						borderRadius="1.5rem"
					>
						{active}
					</Text>

					<RangeSlider
						w="100%"
						aria-label="volume"
						min={0}
						max={1}
						step={0.05}
						defaultValue={[ 0.65 ]}
						onChange={val => handleVolumeChange(val)}
					>
						<RangeSliderTrack bg="light.200">
							<RangeSliderFilledTrack bg="purple.200" />
						</RangeSliderTrack>

						<RangeSliderThumb boxSize={6} index={0}>
							<Box color="pink.200" as={MdGraphicEq} />
						</RangeSliderThumb>
					</RangeSlider>
					<Text fontSize="3xl" textAlign="center" color="blue.400" my="5">
						Volume: {Math.floor(displayVolume * 100) + '%'}
					</Text>
				</Box>
			</Center>
		</GridItem>
	);
};

export default Display;
