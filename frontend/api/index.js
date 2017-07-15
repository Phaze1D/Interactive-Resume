import local from  './local'

export default function getCommandInfo(command) {
	return local.get(command)
}
