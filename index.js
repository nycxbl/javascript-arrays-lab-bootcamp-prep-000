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
  kittens[kittens.length-1] = name;
  var newArray = kittens;
  return newArray;
}

function prependKitten(name){
  var newArray = kittens;
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(){
  var newArray = kittens
newArray.length = newArray.length-1;
return newArray;
}

function removeFirstKitten(){
  
}