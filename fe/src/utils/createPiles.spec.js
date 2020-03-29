import createPiles from './createPiles';

const cards = [{ value: 'AH' }, { value: '2H' }, { value: '3H' }, { value: '4H' }, { value: '5H' }, { value: '6H' }];

describe('utils/createPiles', () => {
  it('should create 3 piles with 6 cards', () => {
    const { piles, length } = createPiles(cards, 3);

    expect(piles).toMatchSnapshot();
    expect(length).toBe(6);
  });
});
