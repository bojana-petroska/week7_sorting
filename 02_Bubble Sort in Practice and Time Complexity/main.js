const originalArray = [
  64, 24, 25, 12, 22, 2, 11, 90, 13, 15, 29, 94, 87, 6, 33,
];
const originalArrayDisplay = document.getElementById('original-array');
const sortedArrayDisplay = document.getElementById('sorted-array');
const iterationsDisplay = document.getElementById('iterations');

originalArrayDisplay.textContent = originalArray.join(', ');
sortedArrayDisplay.textContent = originalArray.join(', ');


// function bubbleSort(array) {
//     let swapped;
//     let iterations = 0;

//     do {
//         swapped = false;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] > array[i+1]) {
//                 [array[i], array[i+1]] = [array[i+1], array[i]]
//                 swapped = true;
//             }
//         }
//         iterations++;
//     } while(swapped) {
//         iterationsDisplay.textContent = iterations;
//         return array;
//     }
// }

// second method
// function bubbleSortMethod2(inputArray) {
//     let array = inputArray.slice();
//     const length = array.length;
//     for (let i = 0; i < length - 1; i++) {
//         let swapped = false;
//         for (let j = 0; j < length - i - 1; j++) {
//             if (array[j] > array[j+1]) {
//                 //swap elements
//                 const temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//                 swapped = true;
//             }
//         }

//         if (!swapped) {
//             // if no swaps are made in this pass, the array is already sorted
//             return array;
//         }
//     }
// }

// Selection Sort in Practice

function selectionSort(array) {
    let iterations = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        console.log(`OUTER LOOP: Initial minimum element: ${array[minIndex]} at index: ${minIndex}`);
        console.log(`Current array: ${array.join(', ')}`);
        for (let j = i; j < array.length; j++) {
            console.log(`array[${j}]: ${array[j]}, array[${minIndex}]: ${array[minIndex]}`)
            if (array[j] < array[minIndex]) {
                console.log(`New minimum index chosen: ${j}, value: ${array[j]}`)
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        iterations++;
    }
    return { sortedArray: array, iterations: iterations };
}


function sort() {
  //const sortedArray = bubbleSort(originalArray.slice()); //Method 1
  //const sortedArray = bubbleSortMethod2(originalArray.slice()); // Method 2
  const { sortedArray, iterations } = selectionSort(originalArray.slice());
  //const sortedArray = selectionSort(originalArray.slice());
  sortedArrayDisplay.textContent = sortedArray.join(', ');
  iterationsDisplay.textContent = iterations;
}




