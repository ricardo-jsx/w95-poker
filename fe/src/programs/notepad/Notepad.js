import React from 'react';
import PropTypes from 'prop-types';

export default function Notepad({ initialContent }) {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        background: 'white',
        left: '200px',
        top: '150px',
        position: 'absolute',
        fontFamily: 'Fixedsys',
      }}
    >
      {initialContent}
    </div>
  );
}

Notepad.propTypes = {
  initialContent: PropTypes.string,
};

Notepad.defaultProps = {
  initialContent: '',
};
