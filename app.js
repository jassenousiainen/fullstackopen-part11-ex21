const uuid = require('uuid')
const express = require('express')
const app = express()

const anecdotes = require('./db.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/anecdotes', (req, res) => {
  res.send(anecdotes) // change this string to ensure a new version deployed
})

app.post('/anecdotes', (req, res) => {
  try {
    const newAnecdote = { ...req.body, id: uuid.v1() };
    anecdotes.push(newAnecdote)
    res.send(newAnecdote);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put('/anecdotes/:id', (req, res) => {
  try {
    const idx = anecdotes.findIndex((obj => obj.id === req.params.id))
    anecdotes[idx].votes += 1
    res.send(anecdotes[idx])
  } catch (error) {
    res.status(400).send(error.message);
  }
})


app.use(express.static('build'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
