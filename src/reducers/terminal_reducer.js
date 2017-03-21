
import { resumeData } from '../data/resume_data'

const INITIAL_DATA = {
  history: [
    {
      command: 'intro',
      result: resumeData.intro.display(),
      isFirst: true
    }
  ]
}


export const terminalReducer = (state = INITIAL_DATA, action) => {

  if(action.type === 'COMMAND_ENTERED'){

    let mainC = action.payload.command.trim().split(/\s+/)
    let result = ''
    let options = []
    if(mainC[0].length > 0){
      options = mainC.slice(1)
      result = resumeData[mainC[0]] ? resumeData[mainC[0]].display(options) : `-bash: ${mainC[0]}: command not found`
    }

    if(mainC[0] === 'intro'){
      return{
        ...state,
        isFirst: false,
        history: [{command: 'intro', result: resumeData.intro.display()}]
      }
    }

    return{
      ...state,
      isFirst: false,
      history: state.history.concat([{command: action.payload.command, result: result}])
    }
  }


  return state
}
