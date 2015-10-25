// Exercise 1
// Testing for "holes" in the paper


var userInput = prompt("Please give me a test sentence");// gets input
userInput = userInput.split(""); // turns str into single chars in arr

var holyLetters = ["a","b","d","e","g","o","p","q", "A","B","D","O","P","Q","R"]; // holy letters


var holy = filter(userInput, hasHoles);

console.log("Your text contains "+holy.length+"' Holey' letters, they are: "+holy);


function hasHoles(letter){
  return holyLetters.indexOf(letter) > -1;
  }

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
  function filter(collection, predicate) {
  var results = [];

  each(collection, function(currentEl) {
    if (predicate(currentEl)) results.push(currentEl);
  });
  return results;
}
