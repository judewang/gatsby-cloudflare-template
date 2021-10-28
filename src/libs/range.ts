// loop through a numeric range
// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-of-numbers-in-javascript
export const range = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(undefined)
    .map((_, i) => i + start);
};
