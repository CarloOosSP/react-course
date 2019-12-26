import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setVoted] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  const [max, setMax] = useState(0)
  const setToVoted = (vote) => {
    const copy = { ...points }
    copy[vote] += 1 
    setVoted(copy);
    mostValuable(copy);
  };
  const mostValuable = (obj) => Object.keys(obj).reduce((acc, o) => { 
    if( acc < obj[o]) {
      setMax(o);
      acc = obj[o];
    }
    return acc;
  }, 0);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>
        {props.anecdotes[selected]}
        <div>{`has `+points[selected]+` votes`}</div>
        <div>
          <button onClick={() => setToVoted(selected)}>
            Vote
          </button>
          <button onClick={() => setSelected(Math.round(Math.random(1) * 5))}>
            Next anecdote
          </button>
        </div>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {props.anecdotes[max]}
        <div>{`has `+points[max]+` votes`}</div>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
