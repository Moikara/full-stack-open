import { useState } from 'react'

const findMostVoted = (array) => {
  let highest = 0

  for (let i = 0; i < array.length; ++i) {
    if (array[i] > array[highest]) {
      highest = i
    }
  }
  return highest
}

const random = (max) => {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))
  const [mostVoted, setMostVoted] = useState(0)

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    const highest = findMostVoted(copy)
    setMostVoted(highest)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <p>votes: {points[selected]}</p>
      </div>
      <div>
        <button onClick={() => setSelected(random(anecdotes.length))}>next anecdote</button>
        <button onClick={handleVote}>vote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {points[mostVoted] > 0 && anecdotes[mostVoted]}
      </div>
    </div>
  )
}

export default App