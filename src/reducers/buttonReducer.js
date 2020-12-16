

export const buttonReducer = (state = {}, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return {button: state.button + 1}
    }
    default:
      return state
  }
}