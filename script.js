// get by id the text area that password will be generated to

const pwTextArea = document.getElementById("password");

// gets the "generate password" button to use for the event listener, then adds the event listener code
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", () => { 
    pwTextArea.innerText = generatePassword(); 
});

// function for generating the pw using confirms and prompts



function generatePassword(){
var generatedPW = "";
var includeLowerCase = window.confirm("Do you want to include lowercase letters? Select OK for yes, Cancel for no.")
var includeUpperCase = window.confirm("Do you want to include upperrcase letters? Select OK for yes, Cancel for no.")
var includeNumbers = window.confirm("Do you want to include numbers? Select Ok for yes, Cancel for no.");
var includeSpecialChars = window.confirm("Do you want to include symbols? Select Ok for yes, Cancel for no.");
var passwordLength = generateLength();
console.log("password length: ", passwordLength)
var varLoopCount = includeLowerCase + includeUpperCase + includeNumbers + includeSpecialChars;
console.log("loop count: " + varLoopCount);
var arrayOfTypes = [{includeLowerCase}, {includeUpperCase}, {includeNumbers}, {includeSpecialChars}].filter(
    item => Object.values(item)[0]
);
console.log("arrayofTypes: ", arrayOfTypes);


const randomString = {
    includeLowerCase: generateRandomLowercase,
    includeUpperCase: generateRandomUppercase,
    includeNumbers: generateRandomNumber,
    includeSpecialChars: generateRandomSpecial

};

console.log(includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars, randomString)


if (varLoopCount === 0) {
    return "Must select at least one criteria";
}

for (i = 0; i < passwordLength; i += varLoopCount) {

    arrayOfTypes.forEach(type => {
        var randomName = Object.keys(type)[0];

        console.log("randomName = ", randomName);

        generatedPW += randomString[randomName]()
    })

}

return generatedPW.slice(0, passwordLength);

}


// function for generating the length via prompt 

function generateLength() 
{

    do {
        var pwLength = window.prompt("Please select a pw length between 8 & 128.")
        
        if ( pwLength >=8 && pwLength <= 128) {
            return pwLength
        } 
        else {
            window.alert("You have selected a pw length outside the parameters. Please try again.")
        }
            
 } while ( !(pwLength >=8 && pwLength <= 128))

}

//function for getting the random lowercase char

function generateRandomLowercase() {
    return String.fromCharCode(Math.floor( (Math.random() * 26) + 97))
}

// function for getting the random uppercase char

function generateRandomUppercase() {
    return String.fromCharCode(Math.floor( (Math.random() * 26) + 65))
}

//function for getting the random number digit/char

function generateRandomNumber() {
    return String.fromCharCode(Math.floor( (Math.random() * 10) + 48))
}

// function for getting a special character

function generateRandomSpecial() {
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return  specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

