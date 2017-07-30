import bio from './bio'
import education from './education'
import intro from './intro'
import print from './print'
import projects from './projects'
import skills from './skills'
import work from './work'
import commands from './commands'


const localData = {
	bio: bio,
	education: education,
	intro: intro,
	print: print,
	projects: projects,
	skills: skills,
	work: work,
	tab: commands,
	images: function (commands) {
		let ret = this
		for (var i = 1; i < commands.length; i++) {
			if(ret[commands[i]]){
				if(typeof ret[commands[i]] === 'function'){
					ret = ret[commands[i]]([commands[1]])
				}else{
					ret = ret[commands[i]]
				}
			}
		}

		if(ret !== this && ret.images){
			return ret['images']
		}else{
			let err = new Error('no images not found')
			err.name = 'MissingImages'
			throw err
		}
	}
}


export default {
	get: function (command) {
		return new Promise(function(resolve, reject) {
			if(command.includes('clear')){
				command = command.replace('clear', 'intro')
			}
			let options = command.split(/\s/g)
			let data = {command: command}

			if(command.length > 0){
				try {
					data.value = localData[options[0]](options)
				} catch (e){
					data.error = true
					switch (e.name) {
					case 'TypeError':
						data.value = `-bash: ${command}: command not found`
						break

					case 'MissingImages':
						data.value = `-bash: ${e.message}`
						break

					case 'UnknownOption':
						data.value = e.message
						break
					}
				}

			}else{
				data.value = ''
			}

			if(data.error){
				reject({data: data})
			}else{
				resolve({data: data})
			}
		})
	},
	commands: commands
}
