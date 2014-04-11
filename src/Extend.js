var extend = function(destinationObj, sourceObj) {

  for (var prop in sourceObj) {
    destinationObj[prop] = sourceObj[prop];
  }

  return destinationObj;
};