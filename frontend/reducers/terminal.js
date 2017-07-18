import { fromJS } from 'immutable'
import * as types from 'actions/types'
import uuid from 'uuid/v4'


const INITIAL_TERMINAL = fromJS({
	'0': {
		path: '~/Projects/InteractiveResume',
		tabLog: []
	},
	'122': {
		path: '~/Projects/InteractiveResume',
		tabLog: []
	}
})



export const commandReducer = (state = INITIAL_TERMINAL, action) => {
	if(action.type.includes('SUCCESS') || action.type.includes('ERROR')){
		let id = action.meta
		if(action.payload.data.command === 'intro'){
			return state.setIn([id, 'tabLog'], fromJS([action.payload.data]))
		}
		return state.updateIn([id, 'tabLog'], l => l.push(fromJS(action.payload.data)))
	}
	return state
}

export const addTabReducer = (state = INITIAL_TERMINAL, action) => {
	if(action.type === types.ADD_TAB){
		return state.set(uuid(),fromJS(action.payload))
	}

	return state
}

export const removeTabReducer = (state = INITIAL_TERMINAL, action) => {
	if(action.type === types.REMOVE_TAB){
		return state.delete(action.payload.id)
	}

	return state
}
