import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux"
import { uiReducer } from  'reducers/ui_reducer'
import { terminalReducer } from  'reducers/terminal_reducer'
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'


const store = createStore(
  combineReducers({
    uiData: uiReducer,
    terminalData: terminalReducer
  })
)

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('components/App', () => render(App));
