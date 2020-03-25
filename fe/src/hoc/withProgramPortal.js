import React from 'react';
import ReactDOM from 'react-dom';

export default function withProgramPortal(Component) {
  return function (props) {
    return ReactDOM.createPortal(<Component {...props} />, document.querySelector('#programs'));
  };
}
