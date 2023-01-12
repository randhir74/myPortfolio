import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function GmailLink(props) {
  return (
    <a href={`mailto:${props.email}`}>
      <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: '5px' }} />
      Send Email
    </a>
  );
}

export default GmailLink;
