const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var addedLastKitten = kittens.push(name);
  return addedLastKitten;
}

function prependKitten(name) {
  var addedFirstKitten = kittens.unshift(name);
  return addedFirstKitten;
  //return kittens.splice(0,0,name);
}

function removeLastKitten() {
  return kittens.splice(kittens.length - 1, 1);
}

function removeFirstKitten() {
  var loseKitten = kittens.slice(1);
  return loseKitten;
}
