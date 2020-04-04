import { useState, useEffect } from 'react';

//TODO: resize when dragStart and isMaximized
export default function useRnd(window, isMaximized) {
  const [size, setSize] = useState({ width: 500, height: 500 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({ x: window.innerWidth / 2 - 250, y: window.innerHeight / 2 - 250 });
  }, [window]);

  useEffect(() => {
    if (isMaximized) {
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, [isMaximized]);

  function onDragStop(_e, { x, y }) {
    setPosition({ x, y });
  }
  function onResizeStop(_e, _direction, ref, _delta, position) {
    const { width, height } = ref.style;
    setSize({ width, height });
    setPosition(position);
  }

  return { position, size, onDragStop, onResizeStop };
}
