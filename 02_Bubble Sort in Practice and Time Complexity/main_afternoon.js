// Task 1
// Task 1: Simple Bubble Sort (Ascending Order)
// ● Objective: Write a function to sort an array of integers in ascending order using
// the bubble sort algorithm.
// ○ Ascending Order: Smallest to Largest
// ● Function Signature: function bubbleSortAscending(arr)
// ● Parameters: arr - An array of integers.
// ● Return: The array sorted in ascending order.
// ● Example: For an input array [5, 3, 8, 4, 2], bubbleSortAscending([5, 3,
// 8, 4, 2]) should return [2, 3, 4, 5, 8].
// Instructions:
// ● Start by discussing the bubble sort algorithm and its steps.
// ● Implement the algorithm step by step, with the driver typing and the navigator
// guiding.
// ● Test your function with different arrays to ensure it works correctly.
// ● Rotate roles after 15 minutes. (or half-way through)

//const arr = [5, 3, 8, 4, 2];
//console.log(arr.length);

function bubbleSortAscending(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            count ++;
        }
    }
    console.log(count);
    return arr;
}

function bubbleSortDescending(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            count ++;
        }
    }
    console.log(count);
    return arr;
}

console.log(bubbleSortAscending([5, 3, 8, 4, 2]));

console.log(bubbleSortDescending([5, 3, 8, 4, 2]))