import React from 'react';
import leetcodeLogo from './image/leetcode.png';

function Leetcode(props) {
  return (
    <a href={`https://leetcode.com/Randhir_kumar/`} target="_blank" rel="noopener noreferrer">
      <img src={leetcodeLogo} alt="Leetcode Logo" style={{ width: '1em', marginRight: '5px' }} />
    </a>
  );
}

export default Leetcode;
