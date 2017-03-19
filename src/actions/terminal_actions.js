

/**
* Redux Action that adds a newly entered command to the
* terminal history
* @param {string} command - The command to be entered
* @return Redux Action
*/
export const commandEntered = (command) => {
  return {
    type: 'COMMAND_ENTERED',
    payload: {
      command: command
    }
  }
}
