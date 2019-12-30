let log = console.log;

// Question 1: a function called findMissing that takes two arrays and returns the missing elements from the second array

function findMissing(a1, a2) {
  let a = [],
    diff = [];
  for (let i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }
  for (let i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }
  for (let k in a) {
    diff.push(k);
  }
  return diff;
}

let resultOne = findMissing([4, 12, 9, 5, 6, 1], [4, 9, 12, 6]);
log(resultOne);

// Question 2: a function called rotate that takes an array A and a number B and returns the left rotated array A by B positions

function rotate(a, d) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i]);
  }
  for (let j = 1; j <= d; j++) {
    arr.shift(arr.push(arr[0]));
  }
  return arr;
}

let resultTwo = rotate([1, 2, 3, 4, 5, 6], 1);
log(resultTwo);

// Question 3:
