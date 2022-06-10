import { ButtonList } from './ButtonList';
import { GridItem, Center, Text } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';

const Pad = ({ code, setActive, volume }) => {
	const { key, sound, desc } = ButtonList.find(e => e.key === code);
	const [ color, setColor ] = useState('linear(to-br, pink.100, purple.100)');

	const playSound = useCallback(
		() => {
			const audio = document.getElementById(key);
			audio.currentTime = 0;
			audio.volume = volume;
			setColor('linear(to-br, pink.200, purple.100)');
			setActive(desc);
			audio.play();
			setTimeout(() => {
				setColor('linear(to-br, pink.100, purple.100)');
			}, 500);
		},
		[ volume, desc, key, setActive ]
	);

	const handleKeyDown = useCallback(
		e => {
			if (e.key.toLowerCase() === key.toLowerCase()) {
				playSound();
			}
		},
		[ playSound, key ]
	);

	useEffect(
		() => {
			const f = e => {
				handleKeyDown(e);
			};
			document.addEventListener('keydown', f);
			return () => {
				document.removeEventListener('keydown', f);
			};
		},
		[ handleKeyDown ]
	);

	return (
		<GridItem
			boxShadow="lg"
			borderRadius="0.5rem"
			className="drum-pad"
			id={desc}
			key={key}
			bgGradient={color}
			onClick={playSound}
		>
			<Center h="100%">
				<Text fontSize="2xl">{key}</Text>
				<audio className="clip" id={key} src={sound} />
			</Center>
		</GridItem>
	);
};

export default Pad;
