// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompt that come after you generate password 
function generatePassword() {

  var passwordLength = prompt ("Please enter the number of characters you want for you password. Can be 8 characters and no more that 128 characters");

  var numbers = confirm ("Would you like number in your password?");
  
  var lowerCase = confirm ("Would you like lowerCase in your password?");

  var upperCase = confirm ("Would you like upercase in your password?");

  var special = confirm ("Would you like uppercase in your password");

   // Minimum count for numbers, lowerCase, UpperCase, and special 
  var minimumCount = 0;


  var minimumNumbers = "";

  var minmumLowerCase = "";

  var minimumUpperCase = "";

  var minimumSpecial = "";






}