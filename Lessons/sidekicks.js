// Exercise 2
// Sidekicks & Super Heroes


var sidekicks = [
    {name: "Robin",           hero: "Batman"   },
    {name: "Supergirl",       hero: "Superman" },
    {name: "Fatman",          hero: "Mister America"},
    {name: "Oracle",          hero: "Batman"   },
    {name: "Doiby Dickles",   hero: "Green Lantern" },
    {name: "BatGirl",         hero: "Batman"},
    {name: "Pieface",         hero: "Green Lantern" }
];



var search = filter(sidekicks, function (currentEl) {
    return (currentEl.hero === "Green Lantern");})
    .map(function(currentEl) {
    return currentEl.name;
});


console.log(search);



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
