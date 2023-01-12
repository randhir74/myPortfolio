// import React from 'react';

// function Linkedin(props) {
//   return (
//     <>
//     <a href={`https://www.linkedin.com/in/randhir-kumar-6a6344202/`} target="_blank">
//       LinkedIn Profile
//     </a>
//     <div className='linkedin-logo-container'>
//         <img src={linkedinLogo} alt="LinkedIn Logo"  className='linkedin-logo'/>
//         <a href={`https://www.linkedin.com/in/${props.username}`} target="_blank" className='linkedin-link'>
//         LinkedIn Profile
//         </a>
//     </div>
//     </>
//   );
// }

// export default Linkedin;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function LinkedInLink(props) {
  return (
    <a href={`https://www.linkedin.com/in/randhir-kumar-6a6344202/`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ marginRight: '5px' }} />
    </a>
  );
}

export default LinkedInLink;
