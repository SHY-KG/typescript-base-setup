export const max = (numbers: number[]) => Math.max(...numbers);

export const minimum = (numbers: number[]) => Math.min(...numbers);

export const average = (numbers: number[]) =>
  numbers.reduce(
    (accumulator, currentValue, currentIndex, { length }) =>
      accumulator + currentValue / length,
    0
  );

export const sort = (numbers: number[]) => numbers.sort((a, b) => a - b);

export const median = (numbers: number[]) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};
