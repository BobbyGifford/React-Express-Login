const initialState = {
  token: null,
  user: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.payload
    }
  }
  if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      token: action.payload
    }
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.payload
    }
  }
  return state
}

export default reducer
