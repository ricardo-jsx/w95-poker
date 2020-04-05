import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Icon from './Icon';

describe('components/Icon', () => {
  it('should start program on dlbClick', () => {
    const onStartProgram = jest.fn();
    const { queryByAltText, getByRole, queryByText } = render(
      <Icon img="base64..." name="Notepad" onStartProgram={onStartProgram} />
    );

    fireEvent.dblClick(getByRole('button'));
    expect(onStartProgram).toHaveBeenCalled();
    expect(queryByAltText('Notepad icon')).not.toBeNull();
    expect(queryByText('Notepad')).not.toBeNull();
  });
});
