// All men are mortal
// Socrates is a man.
// Therefore, socrates is mortal.

let mortal = man => true;
let men = ['Socrates', 'Plato', 'Aristotle'];
console.log('All men are mortal, is ' + men.every(mortal));

if (men.includes('Socrates') === true) {
  console.log('Socrates is mortal!');
} else {
  console.log('Socrates is not a man!');
}
