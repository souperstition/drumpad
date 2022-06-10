import { ButtonList } from './ButtonList';
import { GridItem, Center } from '@chakra-ui/react';
import { useEffect } from 'react';

const Button = ({ id }) => {
	const { key, sound } = ButtonList.find(e => e.key === id);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown, true);
	}, []);

	const audio = `<audio className="clip" id={id} src={sound} />`;

	const handleKeyDown = e => {
		if (e.key === key.toLowerCase()) {
			playSound(sound);
		}
	};

	const playSound = () => {
		console.log(sound);
	};

	return (
		<GridItem className="drum-pad" id={id} key={id} bg="blue.500" onClick={playSound}>
			<Center h="100%">{key}</Center>
		</GridItem>
	);
};

export default Button;
