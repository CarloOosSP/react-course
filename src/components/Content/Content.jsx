import React from 'react';
import Part from './Part';

const Content = (props) => {
  let { content } = props;
  console.log(content);
  return (
    <>
      <Part part={content[0].name} exercise={content[0].exercises}/>
      <Part part={content[1].name} exercise={content[1].exercises}/>
      <Part part={content[2].name} exercise={content[2].exercises}/>
    </>
  )
}

export default Content;