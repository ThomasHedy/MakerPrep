function tripler(num1){
  return Math.pow(num1,3);
}
// console.log(tripler(6));

function multiply(num1,num2){
  return num1*num2;
}
// console.log(multiply(2,3));

function divide(num1, num2){
  return num1/num2;
}
// console.log(divide(6,3));

function remainder(num1,num2){
  return num1 % num2;
}
// console.log(remainder(6,3));

console.log(remainder(divide(multiply(tripler(5),12),2),3));
