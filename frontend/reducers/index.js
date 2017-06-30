import { combineReducers } from 'redux-immutable'
import reduceReducers from 'reduce-reducers'
import Immutable from 'immutable'

import { terminalReducer } from 'reducers/terminal'



const StateRecord = Immutable.Record({
	terminalLog: undefined
})

export const getReducers = (preloadState=StateRecord) => {
	return combineReducers({
		terminalLog: terminalReducer
	}, preloadState)
}
