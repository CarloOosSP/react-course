import React from 'react';

const Total = (props) => {
  let { total } = props;
  return (
    <>
      <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </>
  )
}

export default Total;