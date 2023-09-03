import React from 'react';

function WaveText({ introString }) {
  return (
    
      <div className="wave">
        {introString.split("").map((char, index) => (
          char === " " ? (
            <span key={index} style={{ '--i': index }}>&nbsp;</span>
          ) : (
            <span key={index} style={{ '--i': index }}>{char}</span>
          )
        ))}
      </div>
    
  );
}

export default WaveText;
