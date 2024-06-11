//sort the array in descending order
function sortArrayDescending(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//function to find string is palindrome
function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
}

//function to find the most repeted word in a string

function findMostRepeated(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostRepeatedElement;

  for (let value of arr) {
    frequency[value] = (frequency[value] || 0) + 1;

    if (frequency[value] > maxCount) {
      maxCount = frequency[value];
      mostRepeatedElement = value;
    }
  }

  return mostRepeatedElement;
}

//sum of the 2 largest numbers in an array
function sumOfLargestNumbers(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return largest + secondLargest;
}

// function to find the missing number in an array
function findMissingNumbers(arr) {
  let max = -Infinity;
  let arrSet = new Set(arr);
  let missingNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i <= max; i++) {
    if (!arrSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

//rotate array by 1 time
function rotateArray(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}

//calling all the functions
console.log(sortArrayDescending([3, 2, 7, 4, 6, 9]));
console.log(isPalindrome("madam"));
console.log(findMostRepeated([4, 5, 6, 4, 3, 6, 4]));
console.log(sumOfLargestNumbers([3, 7, 1, 5, 11, 19]));
console.log(findMissingNumbers([3, 5, 6, 8, 9]));
console.log(rotateArray([3, 5, 6, 8, 9]));
