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
document.getElementById("q1").innerHTML = resultOne;

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
document.getElementById("q2").innerHTML = resultTwo;

// Question 3:
let arr3 = [];
document.getElementById("textfile").onchange = function() {
  let file = this.files[0];
  let reader = new FileReader();
  reader.onload = function(progressEvent) {
    var lines = this.result.split("\n");
    for (let line = 0; line < lines.length; line++) {
      arr3[line] = lines[line];
    }
    let numberOfAccounts = arr3[1];
    arr3.splice(0, 2);
    arr3.splice(numberOfAccounts);
    log(arr3);
    let result = Object.values(
      arr3.reduce((c, v) => {
        c[v] = c[v] || [v, 0];
        c[v][1]++;
        return c;
      }, {})
    ).map(o => [o[0]] + "," + o[1]);
    result.sort(function(a, b) {
      return parseInt(a) - parseInt(b);
    });
    for (let i = 0; i < result.length; i++) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = result[i].split(",")[0] + result[i].split(",")[1];
      document.getElementById("accountlist").appendChild(paragraph);
    }
    //log(result);
  };
  reader.readAsText(file);
};
function accountListing() {}
