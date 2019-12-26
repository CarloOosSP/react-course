import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Content/Content';
import Total from './components/Total/Total';
import Header from './components/Header/Header';

const App = () => {
  const content = { 
    course: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
  };
  return (
    <div>
      <Header header={content}/>
      <Content content={content.parts}/>
      <Total total={content.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
