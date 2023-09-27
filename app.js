// Chapter 17 - 20

//? Q1
// var array = [[], []];

//? Q2
// var grid = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// for (var i = 0; i < grid.length; i++) {
//     for (var j = 0; j < grid[i].length; j++) {
//         document.write grid[i][j] + " ");
//     }
//     document.write("<br>");
// }

//? Q3
// for (var i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write("<br>");
// }

//? Q4
// var num = +prompt("Enter the number to show its multiplication table:");
// var length = +prompt("Enter the length of the multiplication table:");

// if (!isNaN(num) && !isNaN(length)) {
//     for (var i = 1; i <= length; i++) {
//         var result = num * i;
//         document.write(num + " x " + i + " = " + result + "<br>");
//     }
// } else {
//     alert("Please enter valid numeric inputs.");
// }

//? Q5
// var fruitsName = ["apple", "banana", "mango", "orange", "strawberry"];


// for (var i = 0; i < fruitsName.length; i++) {
//     document.write( fruitsName[i] + "<br>"); 
// }
// document.write("<br>");
// for (var i = 0; i < fruitsName.length; i++) {
//     document.write( "Element at index "+ [i] + " is "+ fruitsName[i] + "<br>"); 
// }

//? Q6
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Odd:</h3>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

//? Q7
// var itemNames = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// var found = false;

// for (var i = 0; i < itemNames.length; i++) {
//     if (itemNames[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

//? Q8
// var A = [24, 53, 78, 91, 12];
// document.write("Array itemNames: ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br>");

// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// document.write("The largest number is " + largestNumber);

//? Q9
// var A = [24, 53, 78, 91, 12];
// document.write("Array itemNames: ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br>");
// var smallestNumber = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }
// document.write("The smallest number is " + smallestNumber);

//? Q10
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }

//! Chapter 21 -25

//? Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Nice to meet you.");

//? Q2
// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhone.length;

// document.write("My favourite phone is: " + favoritePhone + "<br>");
// document.write("Length of string: " + inputLength);

//? Q3
// var word = "Pakistani";
// var letterToFind = "n";
// var index = word.indexOf(letterToFind);

// document.write("String: " + word + "<br>");
// document.write("Index of '" + letterToFind + "': " + index);

//? Q4
// var word = "Hello World";
// var letterToFind = "l";
// var lastIndex = word.lastIndexOf(letterToFind);

// document.write("String: " + word + "<br>");
// document.write("Last Index of '" + letterToFind + "': " + lastIndex);

//? Q5
// var word = "Pakistani";
// var characterAtIndex3 = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at 3rd index: " + characterAtIndex3);

//? Q6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Nice to meet you.");

//? Q7
// var city = "Hyderabad";
// var replacedCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replacedCity);

//? Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original Message: " + message + "<br>");
// document.write("After replacement: " + replacedMessage);

//? Q9
// var stringNumber = "472";
// var number = +(stringNumber);

// document.write("value: " + stringNumber + "<br>");
// document.write("type: " + typeof stringNumber + "<br>");

// document.write("value: " + number + "<br>");
// document.write("type: " + typeof number + "<br>");

//? Q10
// var userInput = prompt("Enter some text:");
// var uppercaseText = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + uppercaseText);

//? Q11
// var userInput = prompt("Enter some text:");

// var firstChar = userInput.charAt(0).toUpperCase();
// var restOfText = userInput.slice(1).toLowerCase();

// var titleCaseText = firstChar + restOfText;

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseText);

//? Q12
// var num = 35.36;
// var numString = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + numString);

//? Q13
// var username = prompt("Enter a username:");

// if (username.includes("@") || username.includes(".") || username.includes("!") || username.includes(",")) {
//     alert("Please enter a valid username");
// } else {
//     alert("Username accepted: " + username);
// }

//? Q14

// var itemNames = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// var found = false;

// for (var i = 0; i < itemNames.length; i++) {
//     if (itemNames[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

//? Q15
// const password = prompt("Enter password: ");
// if (!/[a-zA-Z0-9]+/.test(password)) {
//   alert("Password must contain alphabets and numbers.");
// }
// if (/^[0-9]/.test(password)) {
//   alert("Password cannot start with a number.");
// }
// if (password.length < 6) {
//   alert("Password must be at least 6 characters long.");
// }
// else {
//   alert("Password is valid.");
// }


//? Q16
// var university = "University of Karachi";
// var universityArray = university.split(" ");

// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<br>");
    
//     var characters = universityArray[i].split("");
    
//     for (var j = 0; j < characters.length; j++) {
//         document.write(characters[j] + "<br>");
//     }
// }

//? Q17
// var userInput = prompt("Enter some text:");

// if (userInput !== null && userInput !== "") {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     document.write("User input: " + userInput + "<br>");
//     document.write("Last character of input: " + lastCharacter);
// } else {
//     document.write("No input provided. Please enter some text.");
// }

//? Q18
// var inputString = "The quick brown fox jumps over the lazy dog";
// var lowercaseString = inputString.toLowerCase();
// var wordToSearch = "the";
// var words = lowercaseString.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }
// document.write("Text: " + inputString + "<br>");
// document.write("There are " + count + " occurrence(s) of the word '" + wordToSearch + "'");