import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import '../css/AnecdoteList.css'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li>
      <div className='voting-container'>
        <div className='voting'>
          <button onClick={handleClick} className='vote'>
            <span className='caret-l'></span>
            <span className='caret-r'></span>
          </button>
          <span className='ray r1'></span>
          <span className='ray r2'></span>
          <span className='ray r3'></span>
          <span className='ray r4'></span>
          <span className='ray r5'></span>
          <div className='votes'>
            <p>{anecdote.votes}</p>
          </div>
        </div>
      </div>
      <div>
        {anecdote.content}
      </div>
    </li>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  let anecdotes = useSelector(state => {
    if (state.filter === '')
      return state.anecdotes
    else
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
  })

  anecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = async (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotificationWithTimeout('You voted anecdote: "' + anecdote.content + '"', 5))
  }

  return(
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote)}
        />
      )}
    </ul>
  )
}

export default Anecdotes