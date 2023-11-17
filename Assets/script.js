// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
// Placeholder text displayed in display box
document.getElementById("placeholder").value = password;
// Generating the Password
function generatePassword() {
  let length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
  //Prompting for character type
  let charType = prompt("Enter a character type: special, numeric, uppercase, lowercase, all.");
  //Defining character types
  let characterSet = "";
  let charTypeLower = charType.toLowerCase();
  if (charTypeLower === "lowercase") {
      characterSet = "abcdefghijklmnopqrstuvwxyz";
    } else if (charTypeLower === "uppercase") {
      characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (charTypeLower === "numeric") {
      characterSet = "0123456789";
    } else if (charTypeLower === "special") {
      characterSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (charType === "all" || charType==="ALL") {
      characterSet ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
  //Return value of generated password at random
  let returnVal = "";
  for (let i = 0; i < length; i++) {
    //Chooses the character at random from the index of the array
    returnVal += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return returnVal;
}
//Displaying the Generated Password within the Display Box
document.getElementById("password").value = password;