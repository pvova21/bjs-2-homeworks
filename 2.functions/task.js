// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      }
    if (arr[i] > max) {
      max = arr[i];
      }
  sum += arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return {min: min, max: max, avg: avg};
}

// Задание 2

function makeWork(arrOfArr, func) {
  let max;
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) { 
 let min = Infinity;
 let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      }
    if (arr[i] < min) {
      min = arr[i];
      }
  }
  return Math.abs(max - min);
}
