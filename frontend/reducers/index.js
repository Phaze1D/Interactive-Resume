import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'
// import reduceReducers from 'reduce-reducers'


import { terminalReducer } from 'reducers/terminal'
import { appleMenuReducer } from 'reducers/apple_menu'



const StateRecord = Immutable.Record({
	terminalLog: undefined,
	appleMenuItems: undefined
})

export const getReducers = (preloadState=StateRecord) => {
	return combineReducers({
		terminalLog: terminalReducer,
		appleMenuItems: appleMenuReducer
	}, preloadState)
}
