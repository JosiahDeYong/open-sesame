// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var pwdresult = "";
  var pwdlength;
  var userchoices = [];
  // TODO: add code to generate the password here
  var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];

  //prompts and commands
  pwdlength = window.prompt("Password need to at least 8 characters long!");
  if(!pwdlength){
    return "Password Secure!"
  }else if (8 > pwdlength || pwdlength > 100){
    alert("MUST BE AT LEAST 8 CHARACTERS LONG!");
    return "Password Secure!"
  }else {}

  var lowercase = window.confirm("Need to have lower case letters!");
  var uppercase = window.confirm("Need to have upper case letters!");
  var special = window.confirm("Must have a special characters!");
  var numbers = window.confirm("Need to have at least one number!");

  if (lowercase === true) {
    userchoices = lowercase.concat(userchoices);

  }

  if (uppercase === true) {
    userchoices = uppercase.concat(uppercase);

  }

  if (numbers === true) {
    userchoices = numbers.concat(userchoices);

  }

  if (special === true) {
    userchoices = special.concat(userchoices);

  }

  if(!uppercase && !lowercase && !numbers && !special){
    alert("Don't like the password, click generate password.");
    return "Password Secure!"
  }else {}

  //For loop
  for (i = 0; i < pwdlength; i++) {
    pwdresult = pwdresult + userchoices[Math.random(Math.random() * userchoices.length)];

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
