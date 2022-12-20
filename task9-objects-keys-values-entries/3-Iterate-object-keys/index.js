"use strict";

/**
 * @param {object} obj
 * @return {undefined}
 */
//algo
//1. use object.keys
//2. use map
function getKeys(obj) {
  Object.keys(obj).map((key) => console.log(key));
}

// examples
getKeys({ name: "Denis", city: "Warsaw", englishLevel: "A1" });
// prints ===>
// name
// city
// englishLevel
