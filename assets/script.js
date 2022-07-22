// Assignment Code
var generateBtn = document.querySelector("#generate");


// Created Arrays of Possible Character Choices
var numbers = ("0123456789");
var alpha = ("abcdefghijklmnpoqrstuywxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
var special = ("!@#$%^&*_-+=");

// Created function to ask user which options and made conditional statements to ensure requirements were met.
function questions() {
  var isValid = false;
  do {
    var length = prompt("Password need to be between 8 and 128 characters");
    var askNumbers = confirm("Do your password include numbers?");
    var askAlpha = confirm("Do your password to contain both lower and upper letter?");
    var askSpecial = confirm("Password need to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askAlpha: askAlpha,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";



  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }


  console.log(possibleCombo);


  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

