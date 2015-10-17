function randomNumber (min, max){
  counter = 0;
  string = "";
  while (counter <= max){
  var loopNumber = Math.floor(Math.random() * (max -     min +   1)) + min;
    counter ++;
    string += loopNumber +", ";
 }
return string;
}

console.log(randomNumber(1,10));
console.log("Outside the loop:" + loopNumber);
