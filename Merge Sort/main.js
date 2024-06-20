function fibonacci(n) {
    //console.log(`Value of n: ${n}`);
    //console.log(`\n`);
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


const originalArray = [
    64, 24, 25, 12, 22, 2, 11, 90, 13, 15, 29, 94, 87, 6, 33,
  ];
  const originalArrayDisplay = document.getElementById('original-array');
  const sortedArrayDisplay = document.getElementById('sorted-array');
  const iterationsDisplay = document.getElementById('iterations');
  
  originalArrayDisplay.textContent = originalArray.join(', ');
  sortedArrayDisplay.textContent = originalArray.join(', ');

  function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle= Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }

  function merge() {
    
  }

