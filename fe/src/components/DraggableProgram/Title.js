import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ children }) {
  return <header className="title">{children}</header>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
