// Task 2: Recursion Exercise - Countdown Function
// Objective: Write a function that logs numbers in descending order from the given
function countDownForLoop(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
//countDownForLoop(7);

// Instructions: Write a recursive function to achieve the same result.
function countDown(num) {
  if (num === 0) {
    return num;
  } else {
    console.log(num);
    return countDown(num - 1);
  }
}

//console.log(countDown(8));

// Task 4: Merge Sort with Tracking Split Steps

let arr2 = [38, 27, 43, 3, 9, 82, 10];

function mergeSortWithTracking(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const leftSide = arr.slice(0, arr.length / 2);
  const rightSide = arr.slice(arr.length / 2);
  //   console.log(`LEFT: ${leftSide}`);
  console.log(`Split: LEFT: ${leftSide.join(', ')}`);
  //   console.log(`RIGHT: ${rightSide}`);
  console.log(`Split: RIGHT: ${rightSide.join(', ')}`);
  console.log('\n');

  //const middle = Math.floor(arr.length / 2);

  const left = mergeSortWithTracking(leftSide);
  const right = mergeSortWithTracking(rightSide);
  //console.log(`Split: Right: ${right.join(', ')}`);
  //console.log(`MERGE: LEFT: ${left.join(', ')}`);

  return merge(left, right);
}

//console.log(mergeSortWithTracking(arr2))

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      //result.push(left.shift());
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      //result.push(right.shift());
      rightIndex++;
    }
  }

  //return [...result, ...left, ...right]
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

console.log('Initial array:', arr2);
console.log(`Split: INDEX: ${Math.floor(arr2.length / 2)}`);

const sortedArray = mergeSortWithTracking(arr2);
console.log('Final sorted array:', sortedArray);
