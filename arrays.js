var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newElement){
  var newArray = [newElement, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array
}

function addElementToEndOfArray(array, newElement){
  var newArray = [...array, newElement]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, newElement){
  array.push(newElement)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}