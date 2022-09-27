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
  pwdlength = prompt("Password must be at least 8 characters long!");

  if(!pwdlength){
    return "Password Secure!"
  } else if (8 > pwdlength || pwdlength > 100)  {
    alert("MUST BE AT LEAST 8 CHARACTERS LONG!");
    return "Password Secure!"
  } else {}

  var confirmlower = confirm("Need to have lower case letters!");
  var confirmupper = confirm("Need to have upper case letters!");
  var confirmspecial = confirm("Must have a special characters!");
  var confirmnumbers = confirm("Need to have at least one number!");

  if (confirmlower === true) {
    userchoices = lowercase.concat(userchoices);

  }

  if (confirmupper === true) {
    userchoices = uppercase.concat(uppercase);

  }

  if (confirmnumbers === true) {
    userchoices = numbers.concat(userchoices);

  }

  if (confirmspecial === true) {
    userchoices = special.concat(userchoices);

  }

  if(!confirmupper && !confirmlower && !confirmnumbers && !confirmspecial){
    alert("Don't like the password, click generate password.");
    return "Password Secure!"
  }else {}

  //For loop
  for (i = 0; i < pwdlength; i++) {
    pwdresult = pwdresult + userchoices[Math.floor(Math.random() * userchoices.length)];
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
