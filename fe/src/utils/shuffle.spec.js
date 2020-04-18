import shuffle from './shuffle';

describe('utils/shuffle', () => {
  it('should shuffle arr', () => {
    const random = jest
      .fn()
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.7);

    expect(shuffle([1, 2, 3, 4], random)).toEqual([3, 4, 1, 2]);
  });
});
