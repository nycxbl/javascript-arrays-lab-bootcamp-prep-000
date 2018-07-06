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
  var newArray = [name, ...kittens];
  return newArray;
}

function prependKitten(name){

}

function removeLastKitten(){

}

function removeFirstKitten(){
  
}