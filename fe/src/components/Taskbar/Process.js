import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { isProcessMinimized } from 'store/ducks/processes';

const StyledProcess = styled.button`
  display: flex;
  align-items: center;
  padding: 2px;
  border: 2px ${(props) => (props.isMinimized ? 'outset' : 'inset')} ${(props) => props.theme.silver};
  width: 170px;
  font-family: Fixedsys;
  font-weight: bold;
  outline: none;

  &:active {
    border-style: ${(props) => (props.isMinimized ? 'inset' : 'outset')};
  }

  &:before {
    content: '';
    display: inline-block;
    background-image: url(${(props) => props.processIcon});
    background-size: 18px;
    width: 18px;
    height: 18px;
  }
`;

export default function Process({ process, displayProcess, minimizeProcess }) {
  const isMinimized = useSelector(isProcessMinimized(process.id));

  const toggleProcess = () => (isMinimized ? displayProcess(process.id) : minimizeProcess(process.id));

  return (
    <StyledProcess role="button" processIcon={process.icon} onClick={toggleProcess} isMinimized={isMinimized}>
      {process.name}
    </StyledProcess>
  );
}

Process.propTypes = {
  process: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  displayProcess: PropTypes.func.isRequired,
  minimizeProcess: PropTypes.func.isRequired,
};
