// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt for character types and generate the password 
function generatePassword() {

  // Reset password to blank each time new password is generated 
  var password = "";

  // Prompt for length 
  var passwordLength = prompt("Choose a password length between 8 and 128 characters.");

  // Validate length input 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Try again.");
  }

  // Prompt for character types  
  var useLowercase = confirm("Use lowercase letters?");
  var useUppercase = confirm("Use uppercase letters?");
  var useNumeric = confirm("Use numeric characters?");
  var useSpecialChars = confirm("Use special characters?");

  // Define character types 
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Build the character set 
  var characterSet = "";
  if (useLowercase) {
    characterSet += lowercase;
  }
  if (useUppercase) {
    characterSet += uppercase;
  }
  if (useNumeric) {
    characterSet += numbers;
  }
  if (useSpecialChars) {
    characterSet += specialChars;
  }

  // Generate error if characterSet string is blank  
  if (characterSet === "") {
    alert("Must select at least one character type.");
  }

  // Generate the password using a for loop 
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    // Translate the random index to proper string value 
    password += characterSet.substring(randomIndex, randomIndex+1);
    console.log(password);
  }
  
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - when button is pressed, writePassword is executed 
generateBtn.addEventListener("click", writePassword);
