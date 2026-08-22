// const numbers = [6, 13, 8, 21, 4, 17, 10];

// const sumOfOddNumbers = numbers
//   .filter((number) => {
//     return number % 2 !== 0;
//   })
//   .reduce((total, number) => {
//     return total + number;
//   }, 0);

// console.log(sumOfOddNumbers);

// const sumOddNumbers = numbers.reduce((total, number) => {
//   if (number % 2 !== 0) {
//     return total + number;
//   }

//   return total;
// }, 0);

// console.log(sumOddNumbers);

// const evenNumbersDoubled = numbers.filter((number) => {
//   return number % 2 === 0;
// }).map((number) => {
//   return number * 2;
// });

// console.log(evenNumbersDoubled);

// const smallestNumber = numbers.reduce((lowest, number) => {
//   return lowest > number ? number : lowest;
// }, numbers[0]);

// console.log(smallestNumber);

// const largestNumber = numbers.reduce((highest, number) => {
//   return highest < number ? number : highest;
// }, numbers[0]);

// console.log(largestNumber);

// const countNumbersGreaterThanTen = numbers.reduce((count, number) => {
//   if (number > 10) {
//     return count + 1;
//   }

//   return count;
// }, 0);

// console.log(countNumbersGreaterThanTen);

// const sumNumbers = numbers.reduce((total, number) => {
//   return total + number;
// }, 0);

// console.log(sumNumbers);

// const everyNumberGreaterThanZero = numbers.every((number) => {
//   return number > 0;
// });

// console.log(everyNumberGreaterThanZero);

// const numberGreaterThanTwenty = numbers.some((number) => {
//   return number > 20;
// });

// console.log(numberGreaterThanTwenty);

// const numberEvenAndGreaterThanTen = numbers.find((number) => {
//   return number > 10 && number % 2 === 0;
// });

// console.log(numberEvenAndGreaterThanTen);

// const numbersGreaterThanTen = numbers.filter((number) =>  {
//   return number > 10;
// });

// console.log(numbersGreaterThanTen);

// const developers = [
//   { name: 'Maya', experience: 2, isAvailable: true },
//   { name: 'Jordan', experience: 5, isAvailable: false },
//   { name: 'Sofia', experience: 4, isAvailable: true },
//   { name: 'Ethan', experience: 1, isAvailable: true },
// ];

// const devWithLeastExperience = developers.reduce((lowest, developer) => {
//     return lowest.experience > developer.experience ? developer : lowest;
// }, developers[0]);

// console.log(devWithLeastExperience);

// const devWithMostExperience = developers.reduce((highest, developer) => {
//   return highest.experience < developer.experience ? developer : highest;
// }, developers[0]);

// console.log(devWithMostExperience);

// const devTotalYearsAvailable = developers.reduce((total, developer) => {
//   if (developer.isAvailable) {
//     return total + developer.experience;
//   }

//   return total;
// }, 0);

// console.log(devTotalYearsAvailable);

// const availableDevelopers = developers.reduce((count, developer) => {
//     if (developer.isAvailable) {
//         return count + 1;
//     }

//     return count;
// }, 0);

// console.log(availableDevelopers);

// const totalDevExperience = developers.reduce((total, developer) => {
//     return developer.experience + total;
// }, 0);

// console.log(totalDevExperience);

// const firstNonAvailableDeveloper = developers.find((developer) => {
//   return !developer.isAvailable;
// });

// console.log(firstNonAvailableDeveloper);

// const devWithOneYear = developers.every((developer) => {
//     return developer.experience >= 1;
// });

// console.log(devWithOneYear);

// const developerFiveYearsExperience = developers.some((developer) => {
//     return developer.experience >= 5;
// });

// console.log(developerFiveYearsExperience);

// const experiencedDevelopers = developers.filter((developer) => {
//     return developer.experience >= 3 && developer.isAvailable;
// }).map((developer) => {
//     return developer.name;
// });

// console.log(experiencedDevelopers);

// const numbers = [4, 9, 12, 7, 18, 3, 20];

// const numsGreaterThanTenAndDoubled = numbers
//   .filter((number) => {
//     return number > 10;
//   })
//   .map((number) => {
//     return number * 2;
//   });

// console.log(numsGreaterThanTenAndDoubled);

// const firstNumberGreaterThanTen = numbers.find((number) => {
//     return number > 10;
// });

// console.log(firstNumberGreaterThanTen);

// const developers = [
//   { name: 'Alex', experience: 2 },
//   { name: 'Jordan', experience: 5 },
//   { name: 'Taylor', experience: 1 },
//   { name: 'Morgan', experience: 7 }
// ];

// const developersNamesWithAtleastThreeYearsExperience = developers.filter((developer) => {
//     return developer.experience >= 3;
// }).map((developer) => {
//     return developer.name;
// });

// console.log(developersNamesWithAtleastThreeYearsExperience);

// const words = ['apple', 'banana', 'kiwi', 'watermelon', 'pear'];

// const firstWordMoreThanSixCharacters = words.find((word) => {
//     return word.length > 6;
// });

// console.log(firstWordMoreThanSixCharacters);

// const numbers = [5, 12, 7, 20, 3, 18];

// const totalNumberGreaterThanTen = numbers.filter((number) => {
//     return number > 10
// }).reduce((total, number) => {
//     return total + number;
// }, 0);

// console.log(totalNumberGreaterThanTen);

// const products = [
//   { name: 'Keyboard', price: 75 },
//   { name: 'Mouse', price: 35 },
//   { name: 'Monitor', price: 240 },
//   { name: 'Webcam', price: 60 }
// ];

// const productNames = products.map((product) => {
//     return product.name;
// });

// console.log(productNames);

// const numbers = [4, 9, 12, 3, 7, 18];

// const firstEvenNumberGreaterThanTen = numbers.find((number) => {
//     return number % 2 === 0 && number > 10;
// });

// console.log(firstEvenNumberGreaterThanTen);

// const scores = [85, 92, 78, 95, 88];

// const atLeastSeventy = scores.every((score) => {
//     return score >= 70;
// });

// console.log(atLeastSeventy);

// const prices = [25, 40, 15, 80, 30];

// const hasExpensivePrice = prices.some((price) => {
//     return price > 50;
// });

// console.log(hasExpensivePrice);

// const users = [
//   { name: 'John', age: 32 },
//   { name: 'Sarah', age: 17 },
//   { name: 'Mike', age: 24 },
//   { name: 'Emma', age: 15 },
// ];

// const underageUser = users.find((user) => {
//   return user.age < 18;
// });

// console.log(underageUser);

// const numbers = [3, 8, 12, 5, 20, 7];

// const doubledNumbers = numbers.map((number) => {
//     return number * 2;
// });

// console.log(doubledNumbers);

// const words = ['react', 'javascript', 'css', 'typescript', 'html'];

// const longWords = words.filter((word) => {
//     return word.length > 4;
// });

// console.log(longWords);
