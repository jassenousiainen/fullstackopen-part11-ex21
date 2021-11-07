const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.message
  case 'CLEAR':
    return ''
  default:
    return state
  }
}

export const setNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

let timeoutID // global variable to hold timeouts
export const setNotificationWithTimeout = (message, secs) => {
  clearTimeout(timeoutID) // clear any existing timeout

  return async (dispatch) => {
    dispatch(setNotification(message))
    timeoutID = setTimeout(() => {
      dispatch(clearNotification())
    }, secs*1000)
  }
}

export default notificationReducer