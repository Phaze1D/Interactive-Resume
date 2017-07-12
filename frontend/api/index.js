import github from './github'
import local from  './local'

export default function getCommandInfo(command) {
	if(command.includes('projects')){
		return github.get('projects')
	}else{
		return local.get(command)
	}
}
