import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DraggableProgram from 'components/DraggableProgram/index';
import Menu from 'components/Menu/index';

const NotepadStyled = styled.textarea`
  width: 100%;
  height: 100%;
  background: white;
  font-family: 'FixedSys';
  outline: none;
  font-size: 14px;
  resize: none;
`;

export default function Notepad({ initialContent, process }) {
  return (
    <DraggableProgram process={process}>
      <Menu>
        <Menu.Item label="File">
          <Menu.Item label="New File" onClick={() => console.log('Creating a new file...')} />
          <Menu.Item label="TODO" />
          <Menu.Item label="TODO" />
          <Menu.Item label="TODO" />
        </Menu.Item>
        <Menu.Item label="Edit">
          <Menu.Item label="New File" />
          <Menu.Item label="TODO" />
          <Menu.Item label="TODO" />
          <Menu.Item label="TODO" />
        </Menu.Item>
        <Menu.Item label="Search" />
        <Menu.Item label="Help" />
      </Menu>
      <NotepadStyled defaultValue={initialContent}></NotepadStyled>
    </DraggableProgram>
  );
}

Notepad.propTypes = {
  initialContent: PropTypes.string,
  process: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

Notepad.defaultProps = {
  initialContent: '',
};
