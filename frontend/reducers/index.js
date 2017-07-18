import Immutable from 'immutable'
import reduceReducers from 'reduce-reducers'
import { combineReducers } from 'redux-immutable'
import { appleMenuReducer } from 'reducers/apple_menu'
import {
	commandReducer,
	addTabReducer,
	removeTabReducer
} from 'reducers/terminal'



const terminalReducer = reduceReducers(
	commandReducer,
	addTabReducer,
	removeTabReducer
)

const StateRecord = Immutable.Record({
	terminalTabs: undefined,
	appleMenuItems: undefined
})

export const getReducers = (preloadState=StateRecord) => {
	return combineReducers({
		terminalTabs: terminalReducer,
		appleMenuItems: appleMenuReducer
	}, preloadState)
}
