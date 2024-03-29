//O(n log n)

console.time('TIME')
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater));
}
console.timeEnd('TIME')
