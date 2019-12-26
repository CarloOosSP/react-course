import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button';
import Statistic  from './components/Display';


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad;
  return (
    <div>
      <h2> give feedback </h2>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h2> statistics</h2>
      {total > 0  ?
        (<div>
          <table>
            <Statistic  value={good} text='good'/>
            <Statistic  value={neutral} text='neutral'/>
            <Statistic  value={bad} text='bad'/>
            <Statistic  value={total} text='all'/>
            <Statistic  value={(good+neutral-bad)/3} text='average'/>
            <Statistic  value={(good/total)*100 +' %'} text='positive'/>
          </table>
        </div>) 
      :
        (<div>
          <label>No feedback given</label>
        </div>)
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
