import { fromJS } from 'immutable'
import * as types from 'actions/types'

const INITIAL_TERMINAL = fromJS([])


export const terminalReducer = (state = INITIAL_TERMINAL, action) => {

	if(action.type === `${types.COMMAND_ENTERED}_ERROR`){
		return state.push(fromJS(action.payload.data))
	}

	if(action.type === `${types.COMMAND_ENTERED}_SUCCESS`){

		if(action.payload.data.command === 'intro'){
			return INITIAL_TERMINAL.push(fromJS(action.payload.data))
		}
		return state.push(fromJS(action.payload.data))
	}

	return state
}
