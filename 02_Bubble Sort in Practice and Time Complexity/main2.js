const originalArray = [
  64, 24, 25, 12, 22, 2, 11, 90, 13, 15, 29, 94, 87, 6, 33,
];
const originalArrayDisplay = document.getElementById('original-array');
const sortedArrayDisplay = document.getElementById('sorted-array');
const iterationsDisplay = document.getElementById('iterations');

originalArrayDisplay.textContent = originalArray.join(', ');
sortedArrayDisplay.textContent = originalArray.join(', ');

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }
  
  return array;
}

function sort() {
  const sortedArray = insertionSort(originalArray.slice());
  sortedArrayDisplay.textContent = sortedArray.join(', ');
  //iterationsDisplay.textContent = iterations;
}
