import { fromJS } from 'immutable'
import * as tp from 'actions/types'


const INITIAL_TERMINAL = fromJS({
	'0': {
		path: '~/Projects/InteractiveResume',
		tabLog: []
	}
})

export const commandReducer = (state = INITIAL_TERMINAL, action) => {
	if(action.type === `${tp.COMMAND_ENTERED}_SUCCESS` || action.type === `${tp.COMMAND_ENTERED}_ERROR`){
		let id = action.meta
		if(action.payload.data.command === 'intro'){
			return state.setIn([id, 'tabLog'], fromJS([action.payload.data]))
		}
		return state.updateIn([id, 'tabLog'], l => l.push(fromJS(action.payload.data)))
	}
	return state
}

export const addTabReducer = (state = INITIAL_TERMINAL, action) => {
	if(action.type === `${tp.ADD_TAB}_SUCCESS`){
		let data = action.payload
		return state.set(data.id,fromJS(data))
	}
	return state
}

export const removeTabReducer = (state = INITIAL_TERMINAL, action) => {
	if(action.type === `${tp.REMOVE_TAB}_SUCCESS`){
		return state.delete(action.payload.id)
	}
	return state
}
