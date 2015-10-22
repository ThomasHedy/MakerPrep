var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumbers = function(currentEl){
  return currentEl % 2 === 0;
};
var adder = function(accumVal, currentEl){
  return accumVal + currentEl;
};

var evenNumArr = filter(testArr, evenNumbers);
var sum = reduce (testArr, adder, 0);

console.log(sum);
console.log(evenNumArr);

//Each
function each(collection,callback){
  if(Array.isArray(collection)){
  for (var i=0; i < collection.length; i++) {
    callback(collection[i]);
  }
  } else {
    for (var key in collection){
      callback(collection[key]);
    }
  }
}
//Map
function map(collection, callback) {
  var results = [];

     each(collection,function(currentEl){
      results.push(callback(currentEl));
    });
}

//Filter
function filter(collection, callback){
    var results = [];

    each(collection,function(currentEl){

      if(callback(currentEl)){
        results.push(currentEl);
      }
    });
  return results;
}

//Reduce
function reduce(collection, callback, initialValue){
  var accumValue;

  if (collection.length === 0){
    return collection;
  }
  if (arguments.length === 2){
    accumValue = collection [0];
  } else if (arguments.length >= 3){
    accumValue = initialValue;
  }

  each(collection, function(currentEl){
    accumValue = callback(accumValue, currentEl);
  });
  return accumValue;
  }
