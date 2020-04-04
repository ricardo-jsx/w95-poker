import { renderHook, act } from '@testing-library/react-hooks';
import useRnd from './useRnd';

const MOCK_WINDOW = {
  innerWidth: 1000,
  innerHeight: 1000,
};

describe('components/DraggableProgram/useRnd', () => {
  it('should open in the middle of the screen', () => {
    const { result } = renderHook(() => useRnd(MOCK_WINDOW));

    expect(result.current.size).toEqual({ width: 500, height: 500 });
    expect(result.current.position).toEqual({ x: 250, y: 250 });
  });

  it('should use full screen when program is maximized', () => {
    const { result } = renderHook(() => useRnd(MOCK_WINDOW, true));

    expect(result.current.size).toEqual({ width: 1000, height: 1000 });
    expect(result.current.position).toEqual({ x: 0, y: 0 });
  });

  it('should update position when drag stops', () => {
    const { result } = renderHook(() => useRnd(MOCK_WINDOW));

    act(() => {
      result.current.onDragStop(null, { x: 100, y: 200 });
    });

    expect(result.current.position).toEqual({ x: 100, y: 200 });
  });

  it('should update size when resize stops', () => {
    const { result } = renderHook(() => useRnd(MOCK_WINDOW));

    act(() => {
      const ref = { style: { width: 300, height: 400 } };
      const position = { x: 100, y: 200 };
      result.current.onResizeStop(null, null, ref, null, position);
    });

    expect(result.current.position).toEqual({ x: 100, y: 200 });
    expect(result.current.size).toEqual({ width: 300, height: 400 });
  });
});
