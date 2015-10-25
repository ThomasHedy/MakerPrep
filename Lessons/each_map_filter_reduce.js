// find largest num
var arr = [43, 23, 645, 132, 43, 0, -42];
var results = reduce(arr, function(ball, currentEl){
if (ball < currentEl) return currentEl;
  return ball;
});

console.log(results);

var logger = function(input) {
  console.log(input);
};

var obj = {
  firstName: "Tom",
  lastName: "Hedy",
  middleName: "Michael",
};

var as = filter(obj, function(currentEl) {
  return currentEl.toLowerCase().indexOf('a') > -1;
});

console.log(as);
// map([1, 2, 3], logger);
// each([4, 5, 6], logger);

// each function

function each(collection, callback) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (var key in collection) {
        callback(collection[key]);
      }
    }
  }
  // map function

function map(collection, callback) {
    var result = [];

    each(collection, function(currentEl) {
      result.push(callback(currentEl));
    });

    return result;
  }
  // filter function

function filter(collection, predicate) {
  var results = [];

  each(collection, function(currentEl) {
    if (predicate(currentEl)) results.push(currentEl);
  });
  return results;
}

// reduce function

function reduce(collection, callback, initialValue) {

  var accumValue, index;

  if (arguments.length >= 3) { // if initialValue
    accumValue = initialValue;
    index = 0;
  } else {
    accumValue = collection[0]; // if no initialValue
    index = 1;
  }

  while (index < collection.length){
    accumValue = callback(accumValue, collection[index]);     index++;
  }
  return accumValue;
}
