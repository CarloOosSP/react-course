import React from 'react';

const Display = ({value, text}) => {
  return(
    <tbody>
      <tr>
        <th>{text}</th>
        <th>{value}</th>
      </tr>
    </tbody>
  )
}

export default Display;