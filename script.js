// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {

  var numberOfTypes = 0;

  function answerCheck (promptAnswer) {
    if (promptAnswer == "YES") {
      numberOfTypes ++;
    } else if (promptAnswer == "NO") {
      alert('The password will not include this option.');
    } else {
      alert('The answer should have been "YES" or "NO", the password will not include this option.');
    };
  };

  while (numbersCheck != "YES" & lowerCaseLettersCheck != "YES" & upperCaseLettersCheck != "YES" & specialCharactersCheck != "YES") {
    alert('Please select atleast one character type.');
    var numbersCheck = prompt('Should the password include numbers? Type "YES" or "NO" (In capital letters).'); 
    answerCheck(numbersCheck); 
    var lowerCaseLettersCheck = prompt('Should the password include lower case letters? Type "YES" or "NO" (In capital letters).');
    answerCheck(lowerCaseLettersCheck);
    var upperCaseLettersCheck = prompt('Should the password include upper case letters? Type "YES" or "NO" (In capital letters).');
    answerCheck(upperCaseLettersCheck);
    var specialCharactersCheck = prompt('Should the password include special characters? Type "YES" or "NO" (In capital letters).');
    answerCheck(specialCharactersCheck);
  }

  var passwordLength = prompt('How long should the password be? For best password practises, please choose between 10-64');
    if (passwordLength < 10 || passwordLength > 64) {
      alert('Password length should be between 10 and 64, please choose again.');
    }

  while (passwordLength < 10 || passwordLength > 64) {
    var passwordLength = prompt('How long should the password be? For best password practises, please choose between 10-64');
    if (passwordLength < 10 || passwordLength > 64) {
      alert('Password length should be between 10 and 64, please choose again.');
    }
  }

  generatePassword(numbersCheck, lowerCaseLettersCheck, upperCaseLettersCheck, specialCharactersCheck, numberOfTypes, passwordLength);

}

// Function for getting a random element from an array
var passwordCarrier = "";

function getRandom(numbersCheck, lowerCaseLettersCheck, upperCaseLettersCheck, specialCharactersCheck) {

  var randomNumber = Math.floor(Math.random()*4);

  if (numbersCheck == "YES" && randomNumber == 0) {
    passwordCarrier += numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
  } else if (lowerCaseLettersCheck == "YES" && randomNumber == 1) {
    passwordCarrier += lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
  } else if (upperCaseLettersCheck == "YES" && randomNumber == 2) {
    passwordCarrier += upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
  } else if (specialCharactersCheck == "YES" && randomNumber == 3) {
    passwordCarrier += specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  }

}

// Function to generate password with user input
function generatePassword(numbersCheck, lowerCaseLettersCheck, upperCaseLettersCheck, specialCharactersCheck, numberOfTypes, passwordLength) {

  for (var a = 0; passwordCarrier.length < (passwordLength-numberOfTypes); a++) {
      getRandom(numbersCheck, lowerCaseLettersCheck, upperCaseLettersCheck, specialCharactersCheck, numberOfTypes);   
  }

  if (numbersCheck == "YES") {
    passwordCarrier += numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
  }
  if (lowerCaseLettersCheck == "YES") {
    passwordCarrier += lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
  }
  if (upperCaseLettersCheck == "YES") {
    passwordCarrier += upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
  }
  if (specialCharactersCheck == "YES") {
    passwordCarrier += specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  }

  return passwordCarrier;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  passwordCarrier = "";
  console.log(password.length);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);