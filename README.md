## :bookmark_tabs: Table of Contents

- [Purpose](#chart_with_upwards_trend-purpose-top)
- [Project Setup](#-project-setup-top)
- [Setting Up a Theme](#rainbow-setting-up-a-theme-top)
- [Building the Components](#triangular_ruler-building-the-components-top)
- [Creating the Audio Files](#headphones-creating-the-audio-files-top)
- [Logic](#thought_balloon-logic-top)

## :chart_with_upwards_trend: Purpose [:top:](#bookmark_tabs-table-of-contents)

This was a project required to complete the [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/) certification on [freeCodeCamp](https://www.freecodecamp.org). I found it to be an enjoyable and challenging project to work on. It taught me a lot about controlling state and passing props between components in React. 

I decided on [Chakra UI](https://chakra-ui.com/) as the styling framework. It saved me some time that would have been spent worrying about the design, and I found it quite easy to work with.

## 🔎 Project Setup [:top:](#bookmark_tabs-table-of-contents)

I started out by creating my folders and component files, and linking them all together.

~~~
📦src
 ┣ 📂components
 ┃ ┣ 📜ButtonList.js
 ┃ ┣ 📜Display.js
 ┃ ┣ 📜DrumPad.js
 ┃ ┗ 📜Pad.js
 ┣ 📜App.js
 ┗ 📜index.js
~~~

I then installed my dependencies:

~~~bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-icons
~~~

The icon package was needed for the "GraphicEQ" icon on the volume slider.

## :rainbow: Setting Up a Theme [:top:](#bookmark_tabs-table-of-contents)

Following the documentation found on Chakra UI's [Customize Theme](https://chakra-ui.com/docs/styled-system/customize-theme) page, I installed my needed fonts and created the colors for my theme.

~~~bash
npm install @fontsource/open-sans @fontsource/raleway
~~~

~~~jsx
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`
	},
	colors: {
		light: {
			100: 'rgba(247, 247, 248, 1)',
			200: 'rgba(228, 227, 238, 1)'
		},
		pink: {
			100: 'rgba(245, 188, 219, 1)',
			200: 'rgba(253, 181, 161, 1)'
		},

		purple: {
			100: 'rgba(180, 175, 220, 1)',
			200: 'rgba(116, 9, 66, 1)',
			300: 'rgba(98, 44, 111, 1)',
			400: 'rgb(38, 0, 39)'
		},
		blue: {
			100: 'rgba(175, 220, 217, 1)',
			200: 'rgba(1, 143, 204, 1)',
			300: 'rgba(36, 61, 135, 1)',
			400: 'rgba(18, 27, 59, 1)'
		}
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
~~~

Now I was ready to start working on the components.

## :triangular_ruler: Building the Components [:top:](#bookmark_tabs-table-of-contents)

I usually start big and work smaller as I go along, so my first step was adding the wrapper to my App.js file. Using Chakra's [documentation](https://chakra-ui.com/docs/components/center), I imported the elements I needed and got my container in the center of the screen. Then to finish up, I added a heading:

~~~jsx
import { Center, Heading, Box } from '@chakra-ui/react';

function App() {
	return (
		<Center bg="purple.400" h="100vh" id="drum-machine">
			<Box bg="purple.200" p={{ base: '5', md: '10' }} w={{ base: '95vw', md: '80vw' }} borderRadius="1rem">
                <Heading>DRUM MACHINE</Heading>
            </Box>
		</Center>
	);
}

export default App;
~~~

| |
| --- |
| Now the easy part is done! |
| ![heading](https://github.com/souperstition/drumpad/blob/master/img/empty-container-heading.png?raw=true) |

I set up the grid for the buttons using Chakra's [grid system](https://chakra-ui.com/docs/components/grid).

~~~jsx
import { Grid } from '@chakra-ui/react';

const DrumPad = () => {
	return (
		<Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(3, 1fr)" gap={{ base: '3', md: '6' }}>
			<Pad code="Q" />
			<Pad code="W" />
			<Pad code="E" />
			<Display />

			<Pad code="A" />
			<Pad code="S" />
			<Pad code="D" />

			<Pad code="Z" />
			<Pad code="X" />
			<Pad code="C" />
		</Grid>
	);
};

export default DrumPad;
~~~

I can now add the DrumPad component to my App.js file. Of course, I now need to make and import the Pad and Display components. Once I've created those components and added some basic styling, the UI looks like this: 

![ui](https://github.com/souperstition/drumpad/blob/master/img/ui.png?raw=true)

All of those buttons on the left were made using just one component. The Pad component is passed a prop called "code" and given a value from its parent, DrumPad. It can then display that value. 

## :headphones: Creating the Audio Files [:top:](#bookmark_tabs-table-of-contents)

Since I'm a musician, I knew of several options for being able to sample drum sounds. In the end, I decided to go with [Soundtrap](https://www.soundtrap.com/). I settled on the **80s Drum Machine** preset, and went to work creating the sounds I would need:

![soundtrap](https://github.com/souperstition/drumpad/blob/master/img/soundtrap.png?raw=true)

For each sound, I got an mp3 by clicking Save, then File -> Export -> Export project to mp3 file. The mixing process takes a while, so I had multiple tabs open to speed things up. 

Once I was done, I trimmed up the audio using [Audacity](https://www.audacityteam.org/) and saved everything in my public folder under a subfolder called *sfx*.

## :thought_balloon: Logic [:top:](#bookmark_tabs-table-of-contents)

I first needed a place to store all of the data related to each key. I did that in an object called ButtonList:

~~~js
export const ButtonList = [
	{
		key: 'Q',
		sound: `${process.env.PUBLIC_URL}/sfx/tom.mp3`,
		desc: 'Tom'
	},
	{
		key: 'W',
		sound: `${process.env.PUBLIC_URL}/sfx/hh-closed.mp3`,
		desc: 'Closed HH'
	},
	{
		key: 'E',
		sound: `${process.env.PUBLIC_URL}/sfx/hh-open.mp3`,
		desc: 'Open HH'
	},
	{
		key: 'A',
		sound: `${process.env.PUBLIC_URL}/sfx/snare.mp3`,
		desc: 'Snare'
	},
	{
		key: 'S',
		sound: `${process.env.PUBLIC_URL}/sfx/rim.mp3`,
		desc: 'Rimshot'
	},
	{
		key: 'D',
		sound: `${process.env.PUBLIC_URL}/sfx/ride.mp3`,
		desc: 'Ride'
	},
	{
		key: 'Z',
		sound: `${process.env.PUBLIC_URL}/sfx/kick.mp3`,
		desc: 'Kick'
	},
	{
		key: 'X',
		sound: `${process.env.PUBLIC_URL}/sfx/hh-pedal.mp3`,
		desc: 'HH Pedal'
	},
	{
		key: 'C',
		sound: `${process.env.PUBLIC_URL}/sfx/crash.mp3`,
		desc: 'Crash'
	}
];
~~~

Now I had access to each key, it's audio source location, and the description which would show on the display when a button or key was pressed.

My next challenge is deciding how to share data to the components who need that data. I mapped out my thought process:

![logic chart](https://github.com/souperstition/drumpad/blob/master/img/logic-chart.png?raw=true)

Seeing it like this makes what I have to do look a lot more simple. The parent component will be the owner of all state variables, passing them down to the children when needed. 

Now, I could write out the hooks needed:

**Pad.js**

- **playSound():**
    - sets the volume of the audio file to the current volume, and resets the current time to 0
    - plays the audio file
    - changes the color of the key temporarily
    - sets the key as the current "active" key
- **handleKeyDown():**
    - calls playSound() if the key pressed was a match
- **useEffect():**
    - adds an event listener to the page for any key presses and calls the handleKeyDown function

These are all wrapped in the useCallBack hook and passed the appropriate dependencies.

**Display.js**

- **handleVolumeChange():**
    - waits for a change to the input slider
    - updates the text to display the value selected
    - updates the volume using setVolume

Once all the logic was implemented, all that was left to do was test it out and make sure all the tests pass. :confetti_ball:

If you made it this far, thanks for reading! :heart: If you've started working on this project yourself, good luck! And if this helped you at all, please consider :star: starring the [github repository](https://github.com/souperstition/drumpad/)! 



:top: [back to top](#)