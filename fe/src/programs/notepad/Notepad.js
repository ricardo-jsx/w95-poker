import React from 'react';
import { useSelector } from 'react-redux';

import { isNotepadOpen } from 'store/programs/notepad/reducer';

export default function Notepad({ zIndex }) {
  const isOpen = useSelector(isNotepadOpen);

  if (!isOpen) return null;

  return (
    <div
      style={{
        zIndex,
        width: '300px',
        height: '300px',
        background: 'white',
        left: '200px',
        top: '150px',
        position: 'absolute',
        fontFamily: 'Fixedsys',
      }}
    >
      Hello From notepad!
    </div>
  );
}
