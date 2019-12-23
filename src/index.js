import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Content/Content';
import Total from './components/Total/Total';
import Header from './components/Header/Header';

const App = () => {
  const content = { 
    course: 'Half Stack application development',
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2:  7,
    part3: 'State of a component',
    exercises3: 14,
  };
  return (
    <div>
      <Header header={content}/>
      <Content content={content}/>
      <Total total={content}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
