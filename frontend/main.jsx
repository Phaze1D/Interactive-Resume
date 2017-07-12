import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import { getReducers } from 'reducers'
import Layout from 'Layout'
import Immutable from 'immutable'

import 'sass/index.sass'

let middleware = applyMiddleware( promise({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']}))
let store = null


if(process.env.NODE_ENV === 'production'){
	//
}else{
	const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			serialize: {
				immutable: Immutable
			}
		}) : null

	store = createStore(
		getReducers(),
		composeEnhancers(middleware)
	)
}


ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>,
	document.getElementById('app')
)
