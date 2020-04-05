import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';

describe('components/Menu', () => {
  it('should render all items', () => {
    const a = <div data-testid="item-a" />;
    const b = <div data-testid="item-b" />;

    const { queryByTestId } = render(
      <Menu>
        {a}
        {b}
      </Menu>
    );
    expect(queryByTestId('item-a')).not.toBeNull();
    expect(queryByTestId('item-b')).not.toBeNull();
  });

  it('should open menu and hanle default click event', () => {
    const fn = jest.fn();
    const a = (
      <div data-testid="item-a" onClick={fn}>
        Click Me
      </div>
    );
    const { getByText } = render(<Menu>{a}</Menu>);

    fireEvent.click(getByText('Click Me'));
    expect(fn).toHaveBeenCalled();
  });
});
