// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  
  var newArray = kittens[kittens.length-1] = name;
  return newArray;
}

function prependKitten(name){
  var newArray = kittens;
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(){

  
}

function removeFirstKitten(){

  
}