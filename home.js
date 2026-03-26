//level 01 BEGINEER
// //EXERCISE 1 : GRADE CHECKER
// let score = 85;

// if (score >= 90) {
//   console.log('Grade A');
// } else if (score >= 80) {
//   console.log('Grade B');
// } else if (score >= 70) {
//   console.log('Grade C');
// } else {
//   console.log('Grade F');
// }
// //EXERCISE 2: EVEN OR ADD
// let number = 7;

// if (number % 2 === 0) {
//   console.log(number + ' is even');
// } else {
//   console.log(number + ' is odd');
// }
// //EXERCISE ADE ACCESS
// let age = 15;

// if (age >= 18) {
//   console.log('R-rated movie allowed');
// } else if (age >= 13) {
//   console.log('PG-13 movie allowed');
// } else {
//   console.log('Only G movies allowed');
// }
// //LEVEL INTERMEDIATE
// //EXCERSIZE4: TEMPRATURE ALERT
// let temp = 25;

// if (temp > 30) {
//   console.log('Wear light  and sunscreen');
// } else if (temp >= 20 && temp <= 30) {
//   console.log('Wear casual clothes');
// } else if (temp >= 10 && temp <= 19) {
//   console.log('Wear a jacket');
// } else {
//   console.log('Wear heavy winter gear');
// }
// //EXERCISE 5 : LOGIN VALIDATOR

// let username = 'admin';
// let password = 'wrong123';

// if (username === 'admin' && password === 'password123') {
//   console.log('Login successful');
// } else if (username !== 'admin') {
//   console.log('Username incorrect');
// } else {
//   console.log('Password incorrect');
// }
// // EXERCISE 6: TRAFFIC LIGHT
// let light = 'yellow';

// if (light === 'red') {
//   console.log('STOP');
// } else if (light === 'yellow') {
//   console.log('SLOW DOWN');
// } else if (light === 'green') {
//   console.log('GO');
// } else {
//   console.log('Invalid traffic light');
// }
// //LEVEL 3 ADVANCED 
// //EXERSIZE 7: SHOPPING DISCOUNT
// let amount = 600;
// let member = true;
// let discount = 0;

// if (amount >= 1000) {
//   discount = 0.2;
// } else if (amount >= 500) {
//   discount = 0.1;
// } else if (amount >= 100) {
//   discount = 0.05;
// }

// if (member) {
//   discount += 0.05;
// }


// let finalPrice = amount - amount * discount;

// console.log('Final price =', finalPrice);
// //EXERCISE 8: NUMBER CLASSIFIER

// let number = -15;
// let result = '';

// if (number > 0) {
//   result += 'Positive, ';
// } else if (number < 0) {
//   result += 'Negative, ';
// } else {
//   result = 'Zero';
// }

// if (number !== 0) {
//   if (number % 2 === 0) {
//     result += 'Even, ';
//   } else {
//     result += 'Odd, ';
//   }

//   if (Math.abs(number) < 10) {
//     result += 'Single-digit';
//   } else {
//     result += 'Multi-digit';
//   }
// }

// console.log(result);
// //EXERCISE 9: LEAP YEAR CHECKER

// let year = 2024;

// if (year % 400 === 0) {
//   console.log(year + ' is a leap year');
// } else if (year % 100 === 0) {
//   console.log(year + ' is NOT a leap year');
// } else if (year % 4 === 0) {
//   console.log(year + ' is a leap year');
// } else {
//   console.log(year + ' is NOT a leap year');
// }
