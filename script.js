// Assignment code here
char = {
  lowerCase: ['a','b','c','d',],
  upperCase: ['A','B','C','D'],
  numbers: [1,2,3,4],
  special: ['!','@','#','$']
}

function generatePassword(){

  var pwlength = prompt('How many characters is your password?')
  password = []

  for( let i=0; i<pwlength; i++){
  var random = Math.floor(Math.random()*char.lowerCase.length)
  password.push(char.lowerCase[random])
  console.log(password.join(''))
  }

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
