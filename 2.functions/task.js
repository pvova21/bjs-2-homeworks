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


  

  // Ваш код
  	

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
