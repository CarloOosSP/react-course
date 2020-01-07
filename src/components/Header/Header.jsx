import React from 'react';

const Header = (props) => {
  let { header } = props;
  return(
    <div>
      <h1>{header.name}</h1>
    </div>
  )
}

export default Header;