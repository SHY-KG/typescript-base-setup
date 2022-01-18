import { max, minimum, average, sort, median } from '..';

describe('index Test', () => {
  // Maximum
  it('Gets maximum value', () => {
    expect(max([1, 2, 3, 4, 5, 6])).toBe(6);
    expect(max([1, 3, 5, 7, 9, 11])).toBe(11);
  });
  // Minimum
  it('Gets minimum value', () => {
    expect(minimum([1, 2, 3, 4, 5, 6])).toBe(1);
    expect(minimum([3, 5, 7, 9, 11])).toBe(3);
  });
  // Average
  it('Gets average value', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([15, 25, 35, 45, 55])).toBe(35);
  });
  // Sorts
  it('Sorts the array', () => {
    expect(sort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(sort([22, 55, 11, 33, 12, 5])).toEqual([5, 11, 12, 22, 33, 55]);
  });
  //  Median
  it('Gets the median for odd length', () => {
    expect(median([1, 3, 5, 7, 9])).toBe(5);
    expect(median([13, 15, 17, 19, 21])).toBe(17);
  });
  it('Gets the median for even length', () => {
    expect(median([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5);
    expect(median([5, 10, 15, 20, 25, 30, 35, 40])).toBe(22.5);
  });
});
