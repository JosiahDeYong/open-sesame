// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var pwd = 'password';
  var pwdresult= "";
  var choicesresult = [];

  // TODO: add code to generate the password here
  var upppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var pwdnumbers = [8-100]

  //prompts and commands
  pwdnumbers = window.prompt("Password need to at least 8 characters long!");
  if(!pwdnumbers){
    return "Password Secure!"
  }else if (8 > pwdnumbers || pwdnumbers > 100){
    alert("MUST BE AT LEAST 8 CHARACTERS LONG!");
    return "Password Secure!"
  }else {}

  lowercase = window.confirm("Need to have lower case letters!");
  upppercase = window.confirm("Need to have upper case letters!");
  special = window.confirm("Must have a special characters!");
  numbers = window.confirm("Need to have at least one number!");

  if (lowercase === true) {
    choicesresult = lowercase.concat(choicesresult);

  }

  if (uppercase === true) {
    choicesresult = uppercase.concat(choicesresult);

  }

  if (numbers === true) {
    choicesresult = numbers.concat(choicesresult);

  }

  if (special === true) {
    choicesresult = special.concat(choicesresult);

  }

  if(!upppercase && !lowercase && !numbers && !special){
    alert("Don't like the password, click generate password.");
    return "Password Secure!"
  }else {}

  //For loop
  for (i = 0; i < pwdnumbers; i++) {
    pwdresult = pwdresult + choicesresult[Math.random() * choicesresult.length];

  }

  return pwdresult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
