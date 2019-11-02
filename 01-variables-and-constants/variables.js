/* "hoisting"

This refers to be a situation where the declaration of a variable 
is processed before any code is executed.
This is often the case when a variable is declared with the var keyword.
*/

/* var 

This way of defining a variable relies very heavily on the scope within which it is called. The scope of such a variable would be its current execution context, as was seen above with the localAge variable. This method of variable definition was more common before the release of Ecmascript2015. This is used when one is not completely bothered with polluting the global name space. However, this is not wholly encouraged.

Line 35 will display the data referred to by the globalAge variable. This will run because the globalAge lies within the global scope in this file. Calling the displayLocalAge function is a way to access the data stored in the localAge variable. The variable lies within this local scope of this function. Trying to access localAge through the console will return an error as localAge is not defined in the global scope.
*/

/* let 

This allows you to define variables that are limited within the scope of a block statement. Variables created globally with let do not create properties on the window object, and therefore do not corrupt the global name space. This keyword came with the Ecmascript 2015, and is one type of successor to the var keyword. This is used when one wants a variable to exist and be used within a specific scope of functionality. This is typically used for variables which hold data that could potentially change over time.

A variable name is declared twice on lines 40 and 50. As this is done with the let keyword, this variable contains different data based on the scope within which it operates. When logged to the console, the data returned is that for the let variable that is not within the block scope. This is because the variable would have to be displayed by calling the function within which it exists.
*/

/* const

This allows variables to be defined that can operate either in a local or the global scope. This is typically used for variables with a permanent value - that is one that is not intended to change. Unlike variables declared with the var keyword, global variables declared with const do not become properties of the window object.

Variables created with the const keyword can not be initialised without a variable. Although const variables typically contain data that is permanent in nature, this does not mean that their values are immutable - as shown by adding cub to the pride array in line 55.
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
const pride = ['lion', 'lioness'];
pride.push('cub');
console.log(pride);
