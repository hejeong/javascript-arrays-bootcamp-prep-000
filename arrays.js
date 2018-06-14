var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newElement){
  var newArray = [newElement, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array
}