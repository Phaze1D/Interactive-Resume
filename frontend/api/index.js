import local from  './local'

export function getCommandInfo(command) {
	return local.get(command)
}

export function tabCompletion(value) {
	return local.commands(value)
}
