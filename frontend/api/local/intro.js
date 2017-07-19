
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
		Thanks for visiting my Interactive Resume. My name is David Villarreal and
		I'm a Software Engineer If you'll like to get to know more about me enter
		these commands in the terminal
	`,
	commands: [
		{name: 'bio', info: '- Displays my bio information e.g contact info'},
		{name: 'projects', info: '- Displays all my projects that I have created'},
		{name: 'projects --search <query>', info: '- Search projects by technical skill used'},
		{name: 'skills', info: '- Displays my technical skills with a mastery level'},
		{name: 'education', info: '- Displays all the education I have received'},
		{name: 'education --schools', info: '- Displays the schools that I have attend'},
		{name: 'education --online', info: '- Displays just the online courses I have taken'},
		{name: 'work', info: '- Displays my work experience'},
		{name: 'intro', info: '- Reset the terminal and display these instructions'},
		{name: 'print', info: '- Print out a PDF version of my resume'},
	],
	example: {
		instruction: 'To display all my Javascript projects just type',
		command: 'projects --search Javascript'
	},
	ps: `
	This is an exact replica of my terminal. You can also use some common
	terminal keystrokes like up and down arrows to navigate throught previously
	entered commands. If you are using Mac OS and you have the Chrome browser
	expanded you can press COMMAND SHIFT F to get a more immersive experience.
	`
}



export default function (command) {

	return intro
}
