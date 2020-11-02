// Assignment code here


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","z","y","z"];
var upperCase = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];



//document.getElementById("password")
// Get references to the #generate element
var button = document.getElementById("generate");




var userPick = {};


// prompt that come after you generate password 

  var passwordLength = parseInt(prompt("Please enter the number of characters you want for you password. Can be 8 characters and no more that 128 characters"));

  console.log(passwordLength)

  function promptUser(){
  var numbers = confirm ("Would you like number in your password?");
  
  var lowerCases = confirm ("Would you like lowerCase in your password?");

  var upperCases = confirm ("Would you like uppercase in your password?");

  var specialChars = confirm ("Would you like special characters in your password");


  
 
  if (numbers) {
    userPick ["number"] = number;

  }

  if (lowerCases) {
    userPick["lowerCase"] = lowerCase;
  }

  if (upperCases) {
    userPick["upperCase"] = upperCase;
  }

  if (specialChars) {
    userPick["specialChar"] = specialChar;
  }

  console.log(userPick);
  }

promptUser();

  
// Write password to the #password input
function writePassword() {
  let lastPassword = "";
  for (var i = 0; i < passwordLength; i++) {

    let passwordNew = Object.keys(userPick)
    let random = passwordNew[Math.floor(Math.random() * passwordNew.length)]
    let charAt = getRandomCharacter(userPick[random]);

    lastPassword += charAt;

    console.log('RandomCharacter', charAt);
    console.log(lastPassword, lastPassword.length);
    

  } 
  return lastPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();

//document.getElementById("password").value = writePassword();
// Add event listener to generate button
button.addEventListener("click", function(){
  password.value = writePassword();
})

// Write password to the #password input

 alert(password)