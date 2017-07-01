import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import { getReducers } from 'reducers'
import Layout from 'Layout'

import 'sass/index.sass'

let middleware = applyMiddleware( promise({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']}))
const store = createStore(getReducers(), middleware)

ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>,
	document.getElementById('app')
)
