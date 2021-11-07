import anecdoteService from '../services/anecdoteService'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'UPDATE_ANECDOTE':
      return state.map(anecdote =>
        anecdote.id !== action.data.id ? anecdote : action.data
      )
    default:
      return state
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = await anecdoteService.update(anecdote.id, {...anecdote, votes: anecdote.votes+1})
    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: changedAnecdote
    })
  }
}

export default anecdoteReducer