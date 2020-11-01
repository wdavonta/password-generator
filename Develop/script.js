// Assignment code here


var lowerCase = ["abcdefghijklmnop"];
var upperCase = ["lowerCase.toUpperCase()"];
var numbers = ["0123456789"];
var specialChar = ["!@#$%^&*()=+?/"];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// prompt that come after you generate password 

  var passwordLength = prompt ("Please enter the number of characters you want for you password. Can be 8 characters and no more that 128 characters");
  if (passwordLength >= 8 || passwordLength <=128)
      var newPasswordLength = parseInt(passwordLength)


  var numbers = confirm ("Would you like number in your password?");
  
  var lowerCase = confirm ("Would you like lowerCase in your password?");

  var upperCase = confirm ("Would you like uppercase in your password?");

  var specialChar = confirm ("Would you like special characters in your password");

  while (upperCase === false && lowerCase === false && specialChar === false && numbers === false) {
    alert("You must choose at least one parameter");
      
  var numbers = confirm ("Would you like number in your password?");
  
  var lowerCase = confirm ("Would you like lowerCase in your password?");

  var upperCase = confirm ("Would you like uppercase in your password?");

  var specialChar = confirm ("Would you like special characters in your password");
  
 
   // Minimum count for numbers, lowerCase, UpperCase, and special 
  var minimumCount = 0;


  var minimumnumber = "";

  var minimumlowerCase = "";

  var minimumupperCase = "";

  var minimumspecialChar = "";




  var functionArray = {
    getnumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getlowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getupperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getspecialChar: function() {
      return specialChar[Math.floor(Math.random() * specialChar.length)]
    }

};
 
console.log()

if (numbers === true) {
  minimumnumber = functionArray.getnumber();
  minimumCount++;
}

if (upperCase === true) {
  minimumupperCase = functionArray.getupperCase();
  minimumCount++;
  
}

if (lowerCase === true) {
  minimumlowerCase = functionArray.getlowerCase();
  minimumCount++;
  
}

if (specialChar === true) {
  minimumspecialChar = functionArray.getspecialChar();
  minimumCount++;
  
}



for (let i = 0; i < ((passwordLength) - minimumCount); i++) {
  var pass = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}

document.getElementById("password").value =passwaord;
  }



//alert(password)