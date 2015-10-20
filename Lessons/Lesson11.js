//Excercise 1
// a recipe for cooking a pizza
// it should be noted that this is wrong
// i can't cook, it will be a horrible pizza

var recipe = [];
recipe [0] = "Cooking a pizza";
recipe[1] = "Preheat oven to 400d";
recipe[2] = "Roll out your pizza dough";
recipe[3] = "Put some cheese on that bitch!";
recipe[4] = "Add some meats";
recipe [5] = "Nom";
var lastStep = 5;

// //Excercise 2
console.log(recipe[1]);
console.log(recipe[lastStep]);

var bucketList = [];
bucketList.push("Travel to Rome");
bucketList.push("Open a Business");
bucketList.push("Bang a porn star");
bucketList.push("Retire at 40");
bucketList.push("Get back in shape");
bucketList.unshift("First");
console.log(bucketList);
console.log(bucketList.length);
var dyingWish = bucketList.pop();
console.log(bucketList);
console.log(dyingWish);
var doItNow = bucketList.shift();
console.log(bucketList.length);

// //Excercise 3
//calls for while loop will use forEach

recipe.forEach(function(currentElement){
  console.log(currentElement);
});
bucketList.forEach(function(currentElement){
  console.log(currentElement);
});

var logArray = function(array){
  array.forEach(function(currentElement){
    console.log(currentElement);
  });
};

logArray(bucketList);

// Excercise 4

var reverser = function(array){
  var newArr = array.reverse();
  console.log(newArr);
};

reverser(recipe);

// //Excercise 5
var userNums = prompt("Please give me some numbers seperated by a space");
var numArray = [];
numArray = userNums.split(" ");
console.log(numArray);
var length = numArray.length;
var largest = numArray[0];
var smallest = numArray[0];
var newArr = [];
var biggestSmallest = function(){
  for (var i = 1; i <= length; i++) {
    if (parseInt(numArray[i]) > largest) {
        largest = numArray[i];
        }
    if (parseInt(numArray[i])<smallest){
      smallest = numArray[i];
    }

}
    newArr.push(smallest);
    newArr.push(largest);
    console.log(newArr);
};
biggestSmallest(numArray);

// //Excercise 10
