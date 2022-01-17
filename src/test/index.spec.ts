import { sum } from '..';

describe('index test', () => {
  it('calculates a + b', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 4)).toBe(7);
    expect(sum(1, 1)).toBe(2);
  });
});
