import * as types from 'actions/types'
import {getCommandInfo, tabCompletion} from 'api'
import uuid from 'uuid/v4'


export const commandEntered = (command, tabID) => {
	return {
		type: types.COMMAND_ENTERED,
		payload: getCommandInfo(command.toLowerCase()),
		meta: tabID
	}
}

export const addTab = (path) => {
	return {
		type: types.ADD_TAB,
		payload: new Promise(function(resolve) {
			resolve({
				id: uuid(),
				path: path ? path : '~/Projects/InteractiveResume',
				tabLog: []
			})
		})
	}
}

export const removeTab = (id) => {
	return {
		type: types.REMOVE_TAB,
		payload: new Promise(function (resolve) {
			resolve({id: id})
		})
	}
}

export const completion = (value) => {
	return {
		type: types.TAB_COMPLETION,
		payload: new Promise(function(resolve, reject) {
			let results = tabCompletion(['tab',value])
			if(results.length > 0){
				resolve({data: results})
			}else{
				reject({data: null})
			}
		})
	}
}
