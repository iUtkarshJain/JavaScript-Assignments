/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  const n = numbers.length;
  if(n === 0)
    return undefined;
  let res = numbers[0];
  for(let i = 1; i < n; i++){
    if(numbers[i] > res)
        res = numbers[i];
  }
  return res;
}

module.exports = findLargestElement;