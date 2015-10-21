
// //Excercise 1

function answerLogger(fn){
  fn = fn();
  console.log(fn);
}

answerLogger(function(){
  return "I should be console logged";
});

//Excercise 2
function answerCollector(functionsArray){
  resultsArray=[];
  for (i = 0; i < functionsArray.length; i++){
    resultsArray.push(functionsArray[i]());
  }
  return resultsArray;
}
var fn1 = function () {
  return "this should be the first value in results array";
};

console.log(answerCollector([fn1, function(){ return "this should be the second value in results array"; }]));

//Excercise 3
function addFive(){
  return function (input){
    return 5+input;
  };
}
var add_fiver = addFive();

console.log(add_fiver(5)); //should print 10

console.log(add_fiver(3)); //should print 8

// Exercise 4

function secretKeeper(string1, string2){
  var secret = "kisses";
  console.log(string1 + secret + string2);
}
secretKeeper('The secret -->', '<--');
// console.log(secret); // should be undefined

//Excercise 5
var number = 10;

var adds_10 = function() {
    console.log(number + 10);
};

var leaky_adds_10 = function() {
  number = number+10;
  console.log(number);
};
var number = 10;

// Prints 20
adds_10();

// Number is still 10
console.log(number);

// Prints 20
leaky_adds_10();

// Number has been changed to 20
console.log(number);

/* Excercise 6
 Return function that accepts one parameter and returns
 the result of multiplying parameter by stored number above */
var multiplies_by = function(number) {
  return function(num){
    return number*num;

  };
};
var times5 = multiplies_by(5);
console.log(times5(4)); // 20

var times10 = multiplies_by(10);
console.log(times10(32)); // 320
