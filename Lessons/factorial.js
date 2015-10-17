function factorialOfN(number){
  var fact = 1;
  while(number > 0){
    fact *= number;
    number--;
  }
  return fact;
}
console.log(factorialOfN(5));
