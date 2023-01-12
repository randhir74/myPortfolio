import React from 'react';
import CodeforcesLogo from './image/code-forces.png';

function Codeforces(props) {
  return (
    <a href={`https://codeforces.com/profile/ranu74`} target="_blank" rel="noopener noreferrer">
      <img src={CodeforcesLogo} alt="Codeforces Logo" style={{ width: '1em', marginRight: '5px' }} />
    </a>
  );
}

export default Codeforces;
