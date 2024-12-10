// Get slider and display elements
var generateBtn = document.querySelector('#generate');
var lengthSlider = document.querySelector('#passwordLength');
var lengthDisplay = document.querySelector('#lengthValue');

// Update the display value when the slider changes
lengthSlider.addEventListener('input', function () {
  lengthDisplay.textContent = lengthSlider.value;
});

function generatePassword() {
  var pwdresult = "";
  var guaranteedChars = [];

  var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Get password length from the slider
  var pwdlength = parseInt(lengthSlider.value);

  var confirmupper = document.querySelector('#includeCapitals').checked;
  var confirmnumbers = document.querySelector('#includeNumbers').checked;
  var confirmspecial = document.querySelector('#includeSpecials').checked;

  var pickList = [lowercase];

  if (confirmupper) {
    pickList.push(uppercase);
    pwdresult += uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  if (confirmnumbers) {
    pickList.push(numbers);
    pwdresult += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (confirmspecial) {
    pickList.push(special);
    pwdresult += special[Math.floor(Math.random() * special.length)];
  }

  pwdresult = pwdresult.concat(guaranteedChars);

  while (pwdresult.length < pwdlength) {
    var conga = pickList[Math.floor(Math.random() * pickList.length)];
    pwdresult += conga[Math.floor(Math.random() * conga.length)];
  }

  pwdresult = shuffleString(pwdresult);

  return pwdresult;
}

function shuffleString(str) {
  let arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
