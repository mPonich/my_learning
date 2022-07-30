"use strict";

let simpleArry = [12, 15, 2, 4, 5, -1, 0, -20, -5, 8, 6];

// sort by Bubble Sort
function bubbleSort(simpleArry) {
  for (let i = 0; i < simpleArry.length; i++) {
    for (let j = 0; j < simpleArry.length; j++) {
      if (simpleArry[j] > simpleArry[j + 1]) {
        let temp = simpleArry[j];
        simpleArry[j] = simpleArry[j + 1];
        simpleArry[j + 1] = temp;
      }
    }
  }
  return simpleArry;
}
console.log(bubbleSort(simpleArry));
console.time("bubbleSort");
bubbleSort(simpleArry);
console.timeEnd("bubbleSort");

// sort by Sort by choice
function sortByChoice(simpleArry) {
  let n = simpleArry.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i; j < n; j++) {
      if (simpleArry[j] < simpleArry[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = simpleArry[i];
      simpleArry[i] = simpleArry[min];
      simpleArry[min] = temp;
    }
  }
  return simpleArry;
}
console.log(sortByChoice(simpleArry));
console.time("sortByChoice");
sortByChoice(simpleArry);
console.timeEnd("sortByChoice");

// sort by Insertion Sort
function insertionSort(simpleArry) {
  let n = simpleArry.length;
  for (let i = 1; i < n; i++) {
    let current = simpleArry[i];
    let j = i - 1;
    while (j > -1 && current < simpleArry[j]) {
      simpleArry[j + 1] = simpleArry[j];
      j--;
    }
    simpleArry[j + 1] = current;
  }
  return simpleArry;
}
console.log(insertionSort(simpleArry));
console.time("insertionSort");
insertionSort(simpleArry);
console.timeEnd("insertionSort");

// sort by Quicksort
function quickSort(simpleArry) {
  const pivot = simpleArry[Math.floor(simpleArry.length / 2)];

  let leftItem = [];
  let rightItem = [];

  for (let i = 0; i < simpleArry.length; i++) {
    if (simpleArry[i] < pivot) {
      leftItem.push(simpleArry[i]);
    } else {
      rightItem.push(simpleArry[i]);
    }
  }
  return simpleArry;
  // console.log(leftItem);
  // console.log(rightItem);
}
console.log(quickSort(simpleArry));
console.time("quickSort");
quickSort(simpleArry);
console.timeEnd("quickSort");

// sort by Merge Sort
function merge(left, right) {
  let newArry = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newArry.push(left.shift());
    } else {
      newArry.push(right.shift());
    }
  }
  return [...newArry, ...left, ...right];
}
function mergeSort(simpleArry) {
  const half = simpleArry.length / 2;

  if (simpleArry.length < 2) {
    return simpleArry;
  }

  const left = simpleArry.splice(0, half);
  return merge(mergeSort(left), mergeSort(simpleArry));
}
console.log(mergeSort(simpleArry));
console.time("mergeSort");
mergeSort(simpleArry);
console.timeEnd("mergeSort");
