/* "hoisting"

This refers to be a situation where the declaration of a variable 
is processed before any code is executed.
This is often the case when a variable is declared with the var keyword.
*/

/* var 

This way of defining a variable relies very heavily on the scope within which it is called. The scope of such a variable would be its current execution context, as was seen above with the localAge variable. This method of variable definition was more common before the release of Ecmascript2015. This is used when one is not completely bothered with polluting the global name space. However, this is not wholly encouraged.
*/

/* let 

This allows you to define variables that are limited within the scope of a block statement. Variables created globally with let do not create properties on the window object, and therefore do not corrupt the global name space. This keyword came with the Ecmascript 2015, and is one type of successor to the var keyword. This is used when one wants a variable to exist and be used within a specific scope of functionality. This is typically used for variables which hold data that could potentially change over time.
*/

/* const

This allows variables to be defined that can operate either in a local or the global scope. This is typically used for variables with a permanent value - that is one that is not intended to change. Unlike variables declared with the var keyword, global variables declared with const do not become properties of the window object.
*/

// var
var globalAge = 27;
function displayLocalAge() {
  var localAge = 34;
  console.log(localAge);
}
console.log(globalAge);
displayLocalAge();

// let
let favouriteFilms;
function favFilms() {
  let favouriteFilms = {
    'My fav films are:': [
      "It's Kind of a Funny Story",
      'The Curious Case of Benjamin Button',
      'V for Vendetta',
      'Fight Club',
    ],
  };
  console.log(favouriteFilms);
}
let favouriteFilms = 'A different list of favorite films...';
console.log(favouriteFilms);

// const
const lion;
console.log(lion);
const pride = ["lion", "lioness", "cub"];
console.log(pride);