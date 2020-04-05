import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('components/Menu/MenuItem', () => {
  it('should render label', () => {
    const { queryByText } = render(<MenuItem label="New File" />);
    expect(queryByText('New File')).not.toBeNull();
  });

  it('should be able to detect click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<MenuItem label="New File" onClick={onClick} />);

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render content when open', () => {
    const { queryByText } = render(
      <MenuItem label="New File" open>
        Children
      </MenuItem>
    );
    expect(queryByText('Children')).not.toBeNull();
  });

  // it('should open menu and hanle default click event', () => {
  //   const fn = jest.fn();
  //   const a = <div data-testid="item-a" onClick={fn}>Click Me</div>
  //   const { getByText } = render(<Menu>{a}</Menu>);

  //   fireEvent.click(getByText('Click Me'));
  //   expect(fn).toHaveBeenCalled();
  // })
});
