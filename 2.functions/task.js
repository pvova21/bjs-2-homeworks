// Задание 1
function getArrayParams(arr) {
 let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
     min = arr[i];
     arr.push(min);
  } else if (arr[i] > max) {
	 max = arr[i];
	 arr.push(max);
	}
	sum += arr[i];
   }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return {min: min, max: max, avg: Number(avg)};
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
