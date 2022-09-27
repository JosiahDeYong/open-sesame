// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var password = 'password';
  var upppercase = true;
  var lowercase = true;
  var special = true;
  var numbers = true;
  // TODO: add code to generate the password here
  var upppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var passwordnumbers = [8-100]

  //prompts and commands
  passwordnumbers = window.prompt("Password need to at least 8 characters long!");
  lowercase = window.confirm("Need to have lower case letters!");
  upppercase = window.confirm("Need to have upper case letters!");
  special = window.confirm("Must have a special characters!");
  numbers = window.confirm("Need to have at least one number!");

  if (lowercase === true) {

  }

  if (uppercase === true) {

  }

  if (numbers === true) {

  }

  if (special === true) {

  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
