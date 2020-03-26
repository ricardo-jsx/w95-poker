import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ children }) {
  return (
    <header className="title">
      {children}
      <div className="actions">
        <button>_</button>
        <button>?</button>
        <button>X</button>
      </div>
    </header>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
