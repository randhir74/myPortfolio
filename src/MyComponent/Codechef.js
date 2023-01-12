import React from 'react';
import codechef from './image/codechef.png';

function Codechef(props) {
  return (
    <a href={`https://www.codechef.com/users/randhir2331`} target="_blank" rel="noopener noreferrer">
      <img src={codechef} alt="Codechef Logo" style={{ width: '1em', marginRight: '5px' }} />
    </a>
  );
}

export default Codechef;
