// 1) Programa una función que cuente el número de caracteres de una cadena de texto, miFuncion("Hola Mundo") devolverá 10.
//const userPrompt = window.prompt()

// function count(x = ""){
//     if (typeof x == 'string') {
//         console.log("The string has: ", x.length, "characters");
//     } else {
//         console.error("Introduced type is not a string.");
//     }
// }

// count(userPrompt);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// const inputString = window.prompt("Insert a string");
// const inputNumber = window.prompt("Insert a number");

// function selectSubstring(string = "", number = 0){
//     if (typeof string === 'string' && number != null) {
//         number = parseInt(number);
//         selectedSubstring = string.substring(0, number);
//         console.log("The substring is: ", selectedSubstring);
//     }else{
//         console.error("Invalid input has been introduced");
//     }
// }

// selectSubstring(inputString,inputNumber)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// const inputString = window.prompt("Insert a string");
// const inputSeparator = window.prompt("Insert a separator string");

// function stringToArray(string = "", separator = ""){
//     if (typeof string === 'string' && separator != null) {
//         arr = [];
//         arr = string.split(separator);
//         console.log("The splitted string is: ", arr);
//     } else {
//         console.error("One or more invalid input has been introduced.");
//     }
// }

// stringToArray(inputString, inputSeparator);

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
// const inputString = window.prompt("Insert a string");
// const inputMultiplier = window.prompt("Insert the multiple amount");

// function repeatString(string = "", amount = 0){
//     if (typeof string === 'string' && amount != null) {
//         let stringIteration = "";
//         for (i = 1; i <= amount; i++) {
//             stringIteration = i + ") " + string;
//             console.log(stringIteration);
//         }
//     }else{
//         console.error("One or more invalid input has been introduced");
//     }
// }

// repeatString(inputString, inputMultiplier);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// const inputString = window.prompt("Insert a string");

// function reverseString(string = ""){
//     if (typeof string === 'string') {
//         let reversedString = [...string].reverse().join("");
//         console.log(reversedString);
//     }else{
//         console.error("One or more invalid input has been introduced");
//     }
// }

// reverseString(inputString);

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// const inputString = window.prompt();
// const inputOccurrence = window.prompt();

// function countOccurrences(string = "", occurrence = null){
//     if (typeof string === 'string' && typeof occurrence === 'string'){
//         const regex = new RegExp(occurrence, "g");
//         const occurrenceAmount = string.match(regex).length
//         return occurrenceAmount;
//     }else{
//         console.error("One or more invalid inputs has been introduced");
//         return;
//     }
// }

// console.log(countOccurrences(inputString, inputOccurrence));

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// const inputString = window.prompt();

// function checkIfPalyndrome(string = ""){
//     if (typeof string === 'string'){
//         const underScoreString = string.replaceAll(" ", "").toLowerCase();
//         const reverseString = underScoreString.split("").reverse().join("");

//         return reverseString === underScoreString ? true : false;
//     }else{
//         console.error("One or more invalid inputs has been introduced");
//         return;
//     }
// }

// checkIfPalyndrome(inputString) === true 
//     ? console.log("The word is a palyndrome")
//     : console.log("The word isn't a palyndrome"); 

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
// const inputString = window.prompt("Insert a string");
// const inputPattern = window.prompt("Insert a string pattern");

// function countOccurrences(string = "", deletePattern = null){
//     if (typeof string === 'string' && typeof deletePattern === 'string'){
//         const cleanString = string.replaceAll(deletePattern, "");
//         return cleanString;
//     }else{
//         console.error("One or more invalid inputs has been introduced");
//         return;
//     }
// }

// console.log(countOccurrences(inputString, inputPattern));

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// function randomNumber(){
//     let number = parseInt(Math.random()*99);
//     number += 501; 
//     return number;
// }

// console.log(randomNumber());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// const inputString = parseInt(window.prompt());

// function checkNumber(number = null){
//     if (typeof number === 'number'){
//         return number === parseInt(`${number}`
//             .split("")
//             .reverse()
//             .join(""));
//     }else{
//         console.error("Invalid input has been introduced");
//         return;
//     }
// }

// console.log(checkNumber(inputString));

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
// const inputNumber = parseInt(window.prompt());

// function factorial(number = null){
//     if (typeof number === 'number'){
//         for(i = 1, result = 1; i <= number; i++){
//             result *= i;
//         };
//         return result
//     }else{
//         console.error("One or more invalid input has been introduced");
//         return;
//     }

// }

// console.log(factorial(inputNumber));

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// const inputNumber = parseInt(window.prompt());

// function checkPrime(number = null){
//     if (typeof number === 'number'){
//         for(i = 1, counter = 0; i <= number; i++){
//            if (number % i === 0){
//             counter++;
//            }
//         }
//         return counter < 3 ? true : false;
//     }else{
//         console.error("One or more invalid input has been introduced");
//         return;
//     }

// }

// console.log(checkPrime(inputNumber));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// const inputNumber = parseInt(window.prompt());

// function checkPrime(number = null){
//     if (typeof number === 'number'){
//         return number % 2 === 0 ? true : false;
//     }else{
//         console.error("One or more invalid input has been introduced");
//         return;
//     }

// }

// console.log(checkPrime(inputNumber) === true ? "Even" : "Odd");

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
// const inputTemperature = parseInt(window.prompt("Insert a temperature value"));
// const inputMeasureScale = window.prompt("Insert a measure type");

// function celsiusToFarenheit (number = null) {
//     if (typeof number === 'number') {
//         return number * 1.8 + 32;
//     }else{
//         console.error("Failed to convert: Celsius - Farenheit");
//     }
// }

// function farenheitToCelsius (number = null) {
//     if (typeof number === 'number') {
//         return number / 1.8 - 17.8;
//     }else{
//         console.error("Failed to convert: Farenheit - Celsius")
//     }
// }

// function temperatureConvert (temperature = null, measureScale = "") {

//     // console.log(temperature, measureScale);
//     measureScale = measureScale.toLowerCase();
//     if (typeof temperature === 'number' 
//         && ["c", "celsius", "f", "farenheit"].includes(measureScale)){
//         if(measureScale[0] === "c"){
//             return `${celsiusToFarenheit(temperature)}F`;
//         }else{
//             return `${farenheitToCelsius(temperature)}C`;
//         }
//     }else{
//         console.error("One or more invalid input has been introduced");
//     }
// }

// console.log(temperatureConvert(inputTemperature, inputMeasureScale));

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// const inputAmount = parseInt(window.prompt());
// const inputDiscount = parseInt(window.prompt());

// function applyDiscount(amount = null, discount = null){
//     if (typeof amount === 'number' && typeof discount === 'number'){
//         return amount * (1 - discount/100);
//     }else{
//         console.error("One or more invalid input has been introduced");
//         return;
//     }
// }

// console.log(applyDiscount(inputAmount, inputDiscount));

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// const inputDate = window.prompt("Insert a Date dd/mm/yyyy");
// window.yearInMiliseconds = 31536000000;

// function stringToDate(string = null){
//     const dateArray = string.split("/");
//     if(dateArray.length !== 3){
//         window.alert("Invalid date format");
//         location.reload();
//     }
//     const date = new Date(
//         parseInt(dateArray[2]),
//         parseInt(dateArray[1]) - 1,
//         parseInt(dateArray[0])
//     );

//     return date;
// }


// function calculateDateDifference(stringDate = null){
//     if (typeof stringDate === 'string'){
//         const date = stringToDate(stringDate);
//         const now = new Date();
//         const differenceInMiliseconds = now.getTime() - date.getTime();        
//         const result = differenceInMiliseconds/this.yearInMiliseconds;
//         return parseInt(result);
//     }else{
//         console.error("One or more invalid input has been introduced");
//         return;
//     }
// }

// console.log("Has been passed:", calculateDateDifference(inputDate), "years");

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// let inputNumberLoopFlag = false;
// const arrayNumbers = [];

// while(inputNumberLoopFlag === false){

//     const string = arrayNumbers.length < 1 ? "..." : arrayNumbers.join(", ");
//     const inputNumber = parseInt(
//         window.prompt(`Insert a number or press "Enter" to continue \n [ ${string} ]`)
//     );
//     Number.isNaN(inputNumber) 
//         ? inputNumberLoopFlag = true 
//         : arrayNumbers.push(inputNumber);
// }

// function squareArrayValue(arrayNumbers = []){
//     const result = [];
//     arrayNumbers.forEach(number => {
//         number *= number
//         result.push(number);
//     });

//     return result;
// }

// console.log("The array of numbers inserted: ", arrayNumbers);
// console.log("The squared numbers: ", squareArrayValue(arrayNumbers));


// const arr = [9, 11, -1, 12, 5];
// console.log(arr.slice().sort((a,b) => {return a - b})[0], arr.slice().sort((a,b) => {return b - a})[0]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// let inputNumberLoopFlag = false;
// const arrayNumbers = [];

// while(inputNumberLoopFlag === false){
//     const string = arrayNumbers.length < 1 
//         ? "..." 
//         : arrayNumbers.join(", ");
//     const inputNumber = parseInt(
//         window.prompt(`Insert a number or press "Enter" to continue \n [ ${ string } ]`)
//     );
//     Number.isNaN(inputNumber) 
//         ? inputNumberLoopFlag = true 
//         : arrayNumbers.push(inputNumber);
// }

// function getMinAndMaxValue(arrayNumbers = [-1,-20,5,2,6,1000]){
//     if (arrayNumbers.length === 0){
//         console.error("Array without values tried to perform a function: ", squareArrayValue.name);
//         return;
//     }

//     arrayNumbers.sort((a, b) => {
//         return a - b
//     });

//     const minValue = arrayNumbers[0] 
//     const maxValue = arrayNumbers[arrayNumbers.length - 1];

//     return [ minValue, maxValue ];
// }

// console.log("The array of numbers inserted: ", arrayNumbers);

// [ minValue, maxValue ] = getMinAndMaxValue(arrayNumbers);

// console.log("The min value is: ", minValue);
// console.log("The max value is: ", maxValue);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// let inputNumberLoopFlag = false;
// const arrayNumbers = [];

// while(inputNumberLoopFlag === false){
//     const string = arrayNumbers.length < 1 
//         ? "..." 
//         : arrayNumbers.join(", ");
//     const inputNumber = parseInt(
//         window.prompt(`Insert a number or press "Enter" to continue \n [ ${ string } ]`)
//     );
//     Number.isNaN(inputNumber) 
//         ? inputNumberLoopFlag = true 
//         : arrayNumbers.push(inputNumber);
// }

// function splitEvenOddValues(arrayNumbers = []){
//     if (arrayNumbers.length === 0){
//         console.error("Array without values tried to perform a function: ", squareArrayValue.name);
//         return;
//     }

//     const arrayEven = [];
//     const arrayOdd = [];

//     arrayNumbers.forEach(number => {
//         number % 2 === 0
//             ? arrayEven.push(number)
//             : arrayOdd.push(number);
//     });

//     return [arrayEven, arrayOdd];
// }

// const [ even, odd ] = splitEvenOddValues(arrayNumbers)

// console.log("The array of numbers inserted: ", arrayNumbers);
// console.log("Even numbers: ", even);
// console.log("Odd numbers: ", odd);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// const arrayNumbers = [];
// let endLoopFlag = false;

// while(endLoopFlag === false) {
//     const string = arrayNumbers.length > 0 
//         ? arrayNumbers.join(", ") 
//         : "...";
//     const inputNumber = parseInt(window.prompt(
//         `Please insert a number or press "Enter" to finish the operation \n[ ${string} ]`
//     ));

//     Number.isNaN(inputNumber) 
//         ? endLoopFlag = true 
//         : arrayNumbers.push(inputNumber);
// }

// function sortBothWayArray(arrayNumbers = []){
//     if(arrayNumbers.length > 0){
//         return [
//             arrayNumbers
//                 .map(el => el)
//                 .sort(),
//             arrayNumbers
//                 .map(el => el)
//                 .sort()
//                 .reverse()
//         ];
//     }else{
//         console.error("No number where inserted on the array");
//     }
// }


// const [ minToMax, maxToMin ] = sortBothWayArray(arrayNumbers);

// console.log("Sorted array: ", minToMax);
// console.log("Reverse sort array: ", maxToMin);
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// const arrayNumbers = [];
// let endLoopFlag = false;

// while(endLoopFlag === false) {
//     const string = arrayNumbers.length > 0 
//         ? arrayNumbers.join(", ") 
//         : "...";
//     const inputNumber = parseInt(window.prompt(
//         `Please insert a number or press "Enter" to finish the operation \n[ ${string} ]`
//     ));

//     Number.isNaN(inputNumber) 
//         ? endLoopFlag = true 
//         : arrayNumbers.push(inputNumber);
// }

// function removeDuplicates(numbers = []){
//     if(numbers.length > 0){
//         return new Set(numbers);
//     }else{
//         console.error("No number where inserted on the array");
//     }
// }

// console.log("Initial array: ", arrayNumbers);
// console.log("Array without duplicates: ", removeDuplicates(arrayNumbers));

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
// const arrayNumbers = [];
// let endLoopFlag = false;

// while(endLoopFlag === false) {
//     const string = arrayNumbers.length > 0 
//         ? arrayNumbers.join(", ") 
//         : "...";
//     const inputNumber = parseInt(window.prompt(
//         `Please insert a number or press "Enter" to finish the operation \n[ ${string} ]`
//     ));

//     Number.isNaN(inputNumber) 
//         ? endLoopFlag = true 
//         : arrayNumbers.push(inputNumber);
// }

// function calculateAverage(numbers = []){
//     if(numbers.length > 0){
//         return numbers
//             .reduce(
//                 (previousValue, currentValue) => {
//                     return previousValue + currentValue
//                 }
//             ) / numbers.length;
//     }else{
//         console.error("No number where inserted on the array");
//     }
// }

// console.log("Initial array: ", arrayNumbers);
// console.log("Array average: ", calculateAverage(arrayNumbers));



// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// Todos los datos del objeto son obligatorios.
// Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// Valida que el título no rebase los 100 caracteres.
// Valida que el director no rebase los 50 caracteres.
// Valida que el año de estreno sea un número entero de 4 dígitos.
// Valida que el país o paises sea introducidos en forma de arreglo.
// Valida que los géneros sean introducidos en forma de arreglo.
// Valida que los géneros introducidos esten dentro de los géneros aceptados*.
// Crea un método estático que devuelva los géneros aceptados*.
// Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
// Crea un método que devuelva toda la ficha técnica de la película.
// Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

// Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
// class Movie {
//   static acceptedGenres = [
//     "Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary",
//     "Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical",
//     "Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show",
//     "Thriller","War","Western"
//   ];

//   constructor({ id, title, director, year, countries, genres, rating }) {
//     this.id = this.validateId(id);
//     this.title = this.validateLength(title, 100, "Title");
//     this.director = this.validateLength(director, 50, "Director");
//     this.year = this.validateYear(year);
//     this.countries = this.validateArray(countries, "Countries");
//     this.genres = this.validateGenres(genres);
//     this.rating = this.validateRating(rating);
//   }

//   validateId(id) {
//     if (!/^([a-zA-Z]{2}\d{7})$/.test(id)) {
//       throw new Error("Invalid IMDB ID format");
//     }
//     return id;
//   }

//   validateLength(str, max, field) {
//     if (typeof str !== "string" || str.length > max) {
//       throw new Error(`${field} must be a string up to ${max} chars`);
//     }
//     return str;
//   }

//   validateYear(year) {
//     if (!/^\d{4}$/.test(year)) {
//       throw new Error("Year must be a 4-digit number");
//     }
//     return parseInt(year);
//   }

//   validateArray(arr, field) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       throw new Error(`${field} must be a non-empty array`);
//     }
//     return arr;
//   }

//   validateGenres(genres) {
//     if (!Array.isArray(genres)) throw new Error("Genres must be an array");
//     const invalid = genres.filter(g => !Movie.acceptedGenres.includes(g));
//     if (invalid.length) throw new Error(`Invalid genres: ${invalid.join(", ")}`);
//     return genres;
//   }

//   validateRating(rating) {
//     if (typeof rating !== "number" || rating < 0 || rating > 10) {
//       throw new Error("Rating must be a number between 0 and 10");
//     }
//     return Number(rating.toFixed(1));
//   }

//   static getAcceptedGenres() {
//     return Movie.acceptedGenres;
//   }

//   toString() {
//     return `
// IMDB ID: ${this.id}
// Title: ${this.title}
// Director: ${this.director}
// Year: ${this.year}
// Countries: ${this.countries.join(", ")}
// Genres: ${this.genres.join(", ")}
// Rating: ${this.rating}
//     `;
//   }
// }

// const moviesData = [
//   { id:"AB1234567", title:"Inception", director:"Christopher Nolan", year:2010, countries:["USA"], genres:["Action","Sci-Fi"], rating:8.8 },
//   { id:"CD7654321", title:"Parasite", director:"Bong Joon-ho", year:2019, countries:["South Korea"], genres:["Drama","Thriller"], rating:8.6 },
//   { id:"EF9876543", title:"Spirited Away", director:"Hayao Miyazaki", year:2001, countries:["Japan"], genres:["Animation","Fantasy"], rating:8.5 }
// ];

// moviesData.forEach(data => {
//   const movie = new Movie(data);
//   console.log(movie.toString());
// });

// console.log(moviesData[0])