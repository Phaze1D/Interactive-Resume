import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'
// import reduceReducers from 'reduce-reducers'


import { terminalReducer } from 'reducers/terminal'
import { appleBarReducer } from 'reducers/applebar'



const StateRecord = Immutable.Record({
	terminalLog: undefined,
	appleBar: undefined
})

export const getReducers = (preloadState=StateRecord) => {
	return combineReducers({
		terminalLog: terminalReducer,
		appleBar: appleBarReducer
	}, preloadState)
}
