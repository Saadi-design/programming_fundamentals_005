// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  let count =0;
  for (let key in object) {
    count++;
  }
  return count;
  return Object.keys(object).length;
}


/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  return Math.min(...Object.values(object)); 
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  return Math.max(...Object.values(object)); 
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  return Object.assign({}, object);
}


/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
 return object[key];
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  return object.hasOwnProperty(key);
}
  

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
    let total = 0;
    for (let i in object) {
      if (typeof object[i] === 'number') {
        total += object[i];
      }
    }
    return total;
  };
  
  
/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  let invertObj = {}
  for (let i in object) {
    invertObj[object[i]] = i;
  }
  return invertObj;
}
/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
let objectToReturn = {};
  arr.forEach(function(object) {
    for(let key in object ) {
      const value = object[key];

      objectToReturn[key] = value;
    }
  });

  return objectToReturn;

}



/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  //Need to go through each of the values in the object 
  //to see what matches the matcherFunction
  //So I am actually passing a the whole function into my function to use.
  
  for (let key in obj) {
    let value = obj[key];
    if (matcherFunc(value)) {
       return value;
    }  
  }
  return null;
  
  }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {

  for (let key in obj) {
  
    let value = obj[key];
    if (!func(value)) {
       return false;
    }  
  }
  return true;
  
  }

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj,func){

  for (let key in obj) {
    let value = obj[key];
    if (func(value)) {
       return true;
    }  
  }
  return false;
  
  }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;