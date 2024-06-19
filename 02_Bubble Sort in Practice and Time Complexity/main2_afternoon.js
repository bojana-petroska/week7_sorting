console.log('bo');

// Task 1: Simple Selection Sort (Ascending Order)

const arr = [64, 25, 12, 22, 11];
const arr2 = [34, 8, 9, 11, 20, 2, 45];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSortAscending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }

  return arr;
}

console.log(selectionSortAscending(arr));
console.log(selectionSortAscending(arr2));

// Task 2: Simple Selection Sort (Descending Order)

function selectionSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }

  return arr;
}

console.log(selectionSortDescending(arr));
console.log(selectionSortDescending(arr2));

// Task 3: Selection Sort with Iteration Count

function selectionSortWithCount(arr) {
  let n = arr.length;
  let iterations = 0;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
    iterations++;
  }

  return { sortedArray: arr, iterations: iterations };
}

console.log(selectionSortWithCount(arr));
console.log(selectionSortWithCount(arr2));
