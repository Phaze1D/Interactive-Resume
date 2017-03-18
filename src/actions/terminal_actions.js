


export const commandEntered = (command) => {

  return {
    type: 'COMMAND_ENTERED',
    payload: {
      command: command
    }
  }
}
