function solveEquation(a, b, c) {
   let arr = [];
   let discriminant = Math.pow(b, 2) - 4 * a * c;
   if (D == 0) {
    arr[0] = -b / (2 * a);
   } 
   else if (D > 0) {
    arr[0] = (( -b + Math.sqrt(discriminant)) / (2 * a));
    arr[1] = (( -b - Math.sqrt(discriminant)) / (2 * a));
   }  
   return arr; 
  }
  

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
