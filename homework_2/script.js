/* 1. Make 3 functions:
       1. Function that takes a number through a parameter and returns how many digits that number has.
       2. Function that takes a number through a parameter and returns if it's even or odd.
       3. Function that takes a number through a parameter and returns if it's positive or negative.
      Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

      Ex:
      Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
*/

function digitCounter (num) {
    let numOfDigits = 0;
    num = Math.abs(num); // convert the possibly negative number into a positive one

    while (num > 0) {
        numOfDigits++;
        num = Math.floor(num / 10); // indirectly a "counter"
    };

    return numOfDigits;
}

function integerParity (num) {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

function integerType (num) {
    if(num > 0) {
        return "Positive";
    }
    return "Negative";
}

function numberDescription (num) {
    return console.log(`${digitCounter(num)}, ${integerParity(num)}, ${integerType(num)}`);
}

// numberDescription(-2531);



/* 2. Create 2 variables with arrow functions.
       1. First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.
       2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.
      Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

      Ex:
      **Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red
*/

let textField = document.getElementById("text");
let textSizeInput = document.getElementById("text-size");
let colorInput = document.getElementById("text-color");
let changeTextButton = document.getElementById("text-change");

let textColor = (element, color = "black") => element.style.color = color;
let textSize = (element, textSize = "24") => element.style.fontSize = `${textSize}px`;

changeTextButton.addEventListener("click", () => {  
    // these checks are necessary because after the first click, the default values will never be implemented -> empty input is not absent argument  
    if (textSizeInput.value === "" && colorInput.value === "") { 
        textSize(textField);
        textColor(textField);
    }
    else if (textSizeInput.value === "") {
        textSize(textField);
        textColor(textField, colorInput.value);
    }
    else if (colorInput.value === "") { // technically not necessary in this exercise because even if input(color) === "" on the second, third click etc, the browser makes the text black (however, if the default was another color (ex: purple), and input(color) === "" on the second, third click etc, the text wouldn't change to purple, but to the browser-defined color: black)
        textSize(textField, textSizeInput.value);
        textColor(textField);
    }
    else {
        textSize(textField, textSizeInput.value);
        textColor(textField, colorInput.value);
    }

    textSizeInput.value = "";
    colorInput.value = "";
});



/* 3. Write an anonymous function that takes an array as a parameter and returns the square of each element.
      *Hint: square = number * number or number on power 2.
*/

// I -> changing the original array

let squaredNumbers = function (numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = numbersArray[i] ** 2;
        numbersArray.splice(i, 1, numbersArray[i]);
    }
    
    return numbersArray;
}

// II -> creating a new array

let squaredNumbers2 = function (numbersArray) {
    let squaredNumbersArray = [];

    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = numbersArray[i] ** 2;
        squaredNumbersArray.push(numbersArray[i]);
    }

    return squaredNumbersArray;
}

// console.log(squaredNumbers([2, 12, 5, 8]));
// console.log(squaredNumbers2([2, 12, 5, 8]));



/* 4. Write a self-invoked function that calculates the factorial of a given number and logs it to the console. 
      BONUS: Provide the input from the HTML, and print the result in the HTML.
      *Hint: refer the examples from the class code.
*/

let inputNumber = document.getElementById("factorial-number");
let calculationButton = document.getElementById("calculate-factorial");
let messageText = document.getElementById("calculation-equation");

// I

calculationButton.addEventListener("click", () => {
    let result = (function factorial(number) {
        if (number === 0) {
            return 1;
        }
        return number * factorial(number - 1);
    })(Number(inputNumber.value));

    messageText.innerText = `${inputNumber.value}! = ${result}`;

    inputNumber.value = "";
});

// II -> similar if we're using an arrow function

// let factorial = function (number) {
//     if (number === 0) {
//         return 1;
//     }
//     return number * factorial(number - 1);
// }

// calculationButton.addEventListener("click", () => {
//     let result = (factorial)(Number(inputNumber.value));

//     messageText.innerText = `${inputNumber.value}! = ${result}`;

//     inputNumber.value = "";
// });




/* 5. Write an arrow function that takes a string and returns a new string with each word reversed. 
      Example: 'hello from qinshift academy' ==> 'olleh morf tfihdniq ymedaca' 
      *You don't have to handle uppercase and lowercase, make the example all lowercase. 
      BONUS: Provide the input from the HTML, and print the result in the HTML.
*/

let inputText = document.getElementById("reversable-text");
let reverseTextButton = document.getElementById("reverse-text");
let changedTextField = document.getElementById("new-text");

// I

let reversedText = string => {
    let wordsArray = string.split(" ");
    let finalWords = [];

    for (let i = 0; i < wordsArray.length; i++) {
        let reversedWord = "";

        for(let j = 1; j <= wordsArray[i].length; j++) {
            reversedWord += wordsArray[i][wordsArray[i].length - j];
        };

        finalWords.push(reversedWord);
    }

    return finalWords.join(" ");
}

// II

function wordReversing (word) {
    if (word === "") {
        return "";
    }
    return word[word.length - 1] + wordReversing(word.slice(0, -1));
}

let reversedText2 = string => {
    let wordsArray = string.split(" ");
    let finalWords = [];

    for (let j = 0; j < wordsArray.length; j++) {      
        let reversedWord = wordReversing(wordsArray[j]);

        finalWords.push(reversedWord);
    }

    return finalWords.join(" ");
}

reverseTextButton.addEventListener("click", () => { changedTextField.innerText = reversedText(inputText.value); inputText.value = ""; });
// reverseTextButton.addEventListener("click", () => { changedTextField.innerText = reversedText2(inputText.value); inputText.value = ""; });



/* 6. Create an anonymous function that takes a given array and returns the product of all positive numbers. Test array: let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => Hello ${name}, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

      *Hints:
       1. Iterate over each element of the array
       2. Find a way to check if each element is number
       3. Check if the number is a positive number and if true, store it in a filtered array with all positive numbers
       4. Multiply all positive numbers
*/

let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23 }, undefined, 14, null, 159, 0, -11];

// I

let arrayMultiplication = function(inputArray) {
    let numbersArray = [];

    for (let item of inputArray) {
        if (typeof(item) === 'number') {
            if ((item > 0) && (item !== Infinity)) {
                numbersArray.push(item);
            }
        }
    }

    let result = 1;

    for (let number of numbersArray) {
        result *= number;
    }

    return result;
}

// II

let arrayMultiplication2 = function(inputArray) {
    let result = 1;

    for (let item of inputArray) {
        if (typeof(item) === 'number') {
            if ((item > 0) && (item !== Infinity)) {
                result *= item;
            }
        }
    }

    return result;
}

// console.log(arrayMultiplication(array));
// console.log(arrayMultiplication2(array));



/* 7. Create an arrow function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation) 
      BONUS: Provide the input from the HTML, and print the result in the HTML.

      *Hint: vowels: a, e, i, o, u
*/

let inputString = document.getElementById("input-string");
let countVowelsButton = document.getElementById("count-vowels");
let countedVowelsField = document.getElementById("num-of-vowels");

let numOfVowels = string => {
    let vowelCounter = 0;

    for (let letter of string) {
        letter = letter.toLowerCase(); // in case there is a vowel with a capital letter

        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vowelCounter++;
        }
    }

    if (vowelCounter === 0) {
        return "There are no vowels in this text.";
    }
    else if (vowelCounter === 1) {
        return "There is one vowel in this text.";
    }    
    return `There are ${vowelCounter} vowels in this text.`;
}

countVowelsButton.addEventListener("click", () => countedVowelsField.innerText = numOfVowels(inputString.value));
