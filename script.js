// Assignment code here

// character set are placed in an object.
char = {
  lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  special: ['!','@','#','$','%','^','&','*','(',')',"-",'+',',',".",'/','?','<','>']
}

function generatePassword(){

  var pwlength = prompt('How many characters is your password?');//sets the password length & the duration of the for loop
  var isCapitol = confirm('Do you want capitol letters?');//check to see if you want capitol letters
  var isSpecial = confirm('Do you want special characters?');//checks to see if you want special characters
  var isNumber = confirm('Do you want numbers?');//checks to see if you want numbers
  var isLowerCase = confirm('Do you want lower case letters?');//checks to see if you want lower case letters.
  password = []//empty password array
  var charSet = [];//empty character set to to create character set to be used. 

  //checks truthyness to pick which characters today
  if(isCapitol){charSet =charSet.concat(char.upperCase)}
  if(isLowerCase){charSet = charSet.concat(char.lowerCase)}
  if(isNumber){charSet = charSet.concat(char.numbers)}
  if(isSpecial){charSet = charSet.concat(char.special)}
  if(!isCapitol&&!isLowerCase&&!isNumber&&!isSpecial){
    alert('Please pick a valid character set')
    generatePassword();
  }
console.log(charSet)

//loop through to create password by picking the index of charset array.
  for( let i=0; i< pwlength; i++){
  var random = Math.floor(Math.random()*charSet.length)//picks random number 
  password.push(charSet[random])//adds character to chaSet
  console.log(password.join(''))
  }
  return password.join('')//.join makes the array a string.
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
