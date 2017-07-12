import * as types from 'actions/types'
import getCommandInfo from 'api'

export const commandEntered = (command) => {

	return {
		type: types.COMMAND_ENTERED,
		payload: getCommandInfo(command)
	}
}
