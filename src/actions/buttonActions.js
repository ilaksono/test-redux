const INCREMENT ='INCREMENT'

export const incrementVal = () => dispatch => {
  dispatch({
    type: INCREMENT,
    payload: 'increment it'
  })
}