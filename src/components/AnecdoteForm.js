import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotificationWithTimeout('You added new anecdote: ' + content, 5)
  }

  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
        <br/>
        <button type="submit" className="btn">create</button>
      </div>
    </form>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotificationWithTimeout
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm