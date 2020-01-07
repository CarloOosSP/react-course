import React from 'react';
import Part from './Part';

const Course = (props) => {
  let { name, id, parts } = props.content;
  const eachPart = () => parts.map(o => <Part part={o.name} exercise={o.exercises}/>)
  
  const total = parts.reduce((acc, curr) => acc += curr.exercises ,0);
  return (
    <>
      <h1>{name}</h1>
      {eachPart()}
      <Part part={'total of'} exercise={total}/>
    </>
  )
}

export default Course;