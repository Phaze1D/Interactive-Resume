const commands = [
	{name: 'bio', info: 'Displays my bio information e.g contact info'},
	{name: 'projects', info: 'Displays all my projects that I have created'},
	{name: 'projects --search <query>', info: 'Search projects by technical skill used'},
	{name: 'skills', info: 'Displays my technical skills with a mastery level'},
	{name: 'education', info: 'Displays all the education I have received'},
	{name: 'education --schools', info: 'Displays the schools that I have attend'},
	{name: 'education --online', info: 'Displays just the online courses I have taken'},
	{name: 'work', info: 'Displays my work experience'},
	{name: 'intro', info: 'Reset the terminal and display these instructions'},
	{name: 'print', info: 'Print out a PDF version of my resume'},
]


export default function (options) {

	if(options && options.length > 1){
		let value = options[1]
		let com = []
		for (let i = 0; i < commands.length; i++) {
			let c = commands[i].name.split(' ')[0]
			if(!com.includes(c) && c !== value && c.startsWith(value)){
				com.push(c)
			}
		}
		return com
	}
	return commands
}
