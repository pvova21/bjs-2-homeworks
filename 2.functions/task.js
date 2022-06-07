// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
   min = Infinity;
   max = -Infinity;
   sum = 0;
   for (let i = 0; i < arr.lenght; i++) {
     if (arr[i] > max) {
       max = arr[i];
       arr.push(max);
       }
     if (arr[i] < min) {
       min = arr[i];
       arr.push(min);
     } 
     sum += arr[i];
   }
    avg = (sum / arr.lenght).toFixed(2);  // Ваш код

  return { min: min, max: max, avg: Number(avg) };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

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
