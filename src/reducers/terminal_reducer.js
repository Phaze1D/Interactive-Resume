

const INITIAL_DATA = {
  history: []
}

export const terminalReducer = (state = INITIAL_DATA, action) => {
  if(action.type === 'COMMAND_ENTERED'){
    return{
      ...state,
      history: state.history.concat([{command: action.payload.command, result: ''}])
    }
  }
  return state
}
