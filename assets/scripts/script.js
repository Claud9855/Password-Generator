// Assignment code here
// function generate and return a new password
var generatePassword = function (){
  alert("Welcome! You will pick from a series of criteria to generate a random password");

  var passwordLength = prompt("Enter the length of the password (at least 8 characters long and no more than 128 characters)\n\n");

  // validates user inputs for the length of password
  while(true){
    if(passwordLength === ""){
      alert("Empty input! Please enter a value!");
      
    }
    else if(passwordLength === null){
      return;
    }
    else if(passwordLength < 8 || passwordLength > 128){
      alert("Invalid password length! Password length must be at least 8 characters and no more than 128 characters. Please try again!");
    }
    else {
      break;
    }

    passwordLength = prompt("Enter the length of the password (at least 8 characters long and no more than 128 characters)\n\n");
  }

  // Prompt end-users to confirm whether or not to include lower case, upper case, numeric or special characters
  var confirmLowerCaseLetter = confirm("Do you want to include lower case letters?");
  var confirmUpperCaseLetter = confirm("Do you want to include upper case letters?");
  var confirmDigitalCharacters = confirm("Do you want to include digital characters?");
  var confirmSpecialCharacters = confirm("Do you want to include special characters?");

  // Declared an empty string variable to store the generated password
  var password = "";

  // Declared an empty array variable to hold the functions that will randomly generate a character and store it
  var generatedCharacters = [];

  // while loop is used to validate end-user inputs
  // It will keep looping until at least 1 criteria is selected
  while(true){
    if(confirmLowerCaseLetter && confirmUpperCaseLetter && confirmDigitalCharacters && confirmSpecialCharacters) {
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomDigitalCharacter(), getRandomLowerCaseLetter(), getRandomUpperCaseLetter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmLowerCaseLetter && confirmUpperCaseLetter && confirmDigitalCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomDigitalCharacter(), getRandomLowerCaseLetter(), getRandomUpperCaseLetter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmLowerCaseLetter && confirmUpperCaseLetter && confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomLowerCaseLetter(), getRandomUpperCaseLetter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];

      }
      break;
    }
    else if(confirmLowerCaseLetter && confirmDigitalCharacters && confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomDigitalCharacter(), getRandomLowerCaseLetter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];

      }
      break;
    }
    else if(confirmUpperCaseLetter && confirmDigitalCharacters && confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomDigitalCharacter(), getRandomUpperCaseLetter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];

      }
      break;
    }
    else if(confirmLowerCaseLetter && confirmUpperCaseLetter){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomLowerCaseLetter(), getRandomUpperCaseLetter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmLowerCaseLetter && confirmDigitalCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomLowerCaseLetter(), getRandomDigitalCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmLowerCaseLetter && confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomLowerCaseLetter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmUpperCaseLetter && confirmDigitalCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomUpperCaseLetter(), getRandomDigitalCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmUpperCaseLetter && confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomUpperCaseLetter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmDigitalCharacters && confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = [getRandomDigitalCharacter(), getRandomSpecialCharacter()];
        var randomIndex = Math.floor(Math.random() * generatedCharacters.length);
        password += generatedCharacters[randomIndex];
      }
      break;
    }
    else if(confirmLowerCaseLetter){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = getRandomLowerCaseLetter();
        password += generatedCharacters;
      }
      break;
    }
    else if(confirmUpperCaseLetter){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = getRandomUpperCaseLetter();
        password += generatedCharacters;
      }
      break;
    }
    else if(confirmDigitalCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = getRandomDigitalCharacter();
        password += generatedCharacters;
      }
      break;
    }
    else if(confirmSpecialCharacters){
      for(var i = 0; i < passwordLength; i++){
        generatedCharacters = getRandomSpecialCharacter();
        password += generatedCharacters;
      }
      break;
    }
    else {
      alert("No criteria was selected! At least 1 criteria is required!");
      confirmLowerCaseLetter = confirm("Do you want to include lower case letters?");
      confirmUpperCaseLetter = confirm("Do you want to include upper case letters?");
      confirmDigitalCharacters = confirm("Do you want to include digital characters?");
      confirmSpecialCharacters = confirm("Do you want to include special characters?");
    }
  }
  return password;
}

// Helper function to generate random characters
var generateRandomCharacter = function(ch1, ch2) {
  return ch1.charCodeAt(0) + Math.floor(Math.random() * (ch2.charCodeAt(0) - ch1.charCodeAt(0) + 1));
}

//  Generates a random lower case letter
var getRandomLowerCaseLetter = function() {
  return String.fromCodePoint(generateRandomCharacter('a', 'z'));
}

//  Generate a random upper case letter
var getRandomUpperCaseLetter = function() {
  return String.fromCodePoint(generateRandomCharacter('A', 'Z'));
}

// Generate a random digital character
var getRandomDigitalCharacter = function() {
  return String.fromCodePoint(generateRandomCharacter('0', '9'));
}

// Generate a random special character 
var getRandomSpecialCharacter = function(){
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var index = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters.charAt(index);
}

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
