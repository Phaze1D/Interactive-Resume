import * as types from 'actions/types'
import getCommandInfo from 'api'

export const commandEntered = (command, tabID) => {
	return {
		type: types.COMMAND_ENTERED,
		payload: getCommandInfo(command.toLowerCase()),
		meta: tabID
	}
}


export const addTab = (location) => {
	return {
		type: types.ADD_TAB,
		payload: {
			location: location ? location : '~/Projects/InteractiveResume',
			tabLog: []
		}
	}
}


export const removeTab = (id) => {
	return {
		type: types.REMOVE_TAB,
		payload: {id: id}
	}
}
