import React from 'react';
import Part from './Part';

const Content = (props) => {
  let { content } = props;
  return (
    <>
      <Part part={content.part1} exercise={content.exercises1}/>
      <Part part={content.part2} exercise={content.exercises2}/>
      <Part part={content.part3} exercise={content.exercises3}/>
    </>
  )
}

export default Content;