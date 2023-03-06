// Assignment code here
char = {
  lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  special: ['!','@','#','$']
}

function generatePassword(){

  var pwlength = prompt('How many characters is your password?')
  var isCapitol = confirm('Do you want capitol letters?')
  var isSpecial = confirm('Do you want special characters?')
  password = []

  if(isCapitol&&isSpecial){
    var charSet = char.lowerCase.concat(char.upperCase, char.numbers, char.special)
  }
  if(isCapitol){
    var charSet = char.lowerCase.concat(char.upperCase,char.numbers) 
  }
  if(isSpecial){
    var charSet = char.lowerCase.concat(char.special, char.numbers)
  }
  // if (!isCapitol && !isSpecial){
    // var charSet = char.lowerCase.concat(char.numbers)
  // }
console.log(charSet)
  for( let i=0; i< pwlength; i++){
  var random = Math.floor(Math.random()*charSet.length)
  password.push(charSet[random])
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
