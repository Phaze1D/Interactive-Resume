import commands from './commands'

const intro = {
	art: `
_     _  _______  ___      _______  _______  __   __  _______
| | _ | ||       ||   |    |       ||       ||  |_|  ||       |
| || || ||    ___||   |    |       ||   _   ||       ||    ___|
|       ||   |___ |   |    |       ||  | |  ||       ||   |___
|       ||    ___||   |___ |      _||  |_|  ||       ||    ___|
|   _   ||   |___ |       ||     |_ |       || ||_|| ||   |___
|__| |__||_______||_______||_______||_______||_|   |_||_______|
	`,
	welcomeMessage: `
	Thanks for visiting my Personal Website. My name is David Villarreal and I'm a Software Engineer. If you'll like to get to know more about me enter these commands in the terminal below. (Scroll Down)
	`,
	commands: commands(),
	example: {
		instruction: 'To display all my Javascript projects just type',
		command: 'projects --search Javascript'
	},
	ps: `
	This is an exact replica of my current terminal. You can use some common terminal keystrokes like up and down arrows to navigate through previously entered commands, and tab completion if you forget the commands that are available. If you are using Mac OS and you have the Chrome browser expanded you can press COMMAND SHIFT F to get a more immersive experience.
	`
}



export default function (command) {

	return intro
}
