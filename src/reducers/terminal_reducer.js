
import { terminalData, commands } from '../data/terminal_data'


export const terminalReducer = (state = terminalData, action) => {
  if(action.type === 'COMMAND_ENTERED'){
    return{
      ...state,
      history: state.history.concat([{command: action.payload.command, result: ''}])
    }
  }
  return state
}
