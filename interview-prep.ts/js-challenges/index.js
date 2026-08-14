const developers = [
    { name: 'Maya', experience: 2, language: 'TypeScript', isAvailable: true },
    { name: 'Jordan', experience: 4, language: 'JavaScript', isAvailable: false },
    { name: 'Sofia', experience: 1, language: 'TypeScript', isAvailable: true },
    { name: 'Marcus', experience: 5, language: 'JavaScript', isAvailable: true },
    { name: 'Ava', experience: 3, language: 'TypeScript', isAvailable: false },
];
const developerSummary = developers.map((developer) => {
    return `${developer.name} - ${developer.experience} years.`;
});
console.log(developerSummary);
// const leastExperiencedDeveloper = developers.reduce((lowest, developer) => {
//     return developer.experience < lowest.experience ? developer : lowest;
// }, developers[0]);
// console.log(leastExperiencedDeveloper);
// const mostExperiencedDeveloper = developers.reduce((highest, developer) => {
//     return developer.experience > highest.experience ? developer : highest;
// }, developers[0]);
// console.log(mostExperiencedDeveloper);
// const allDevelopersHaveExperience = developers.every((developer) => {
//     return developer.experience >= 1;
// });
// console.log(allDevelopersHaveExperience);
// const availableTypeScriptExperience = developers.filter((developer) => {
//     return developer.language === 'TypeScript' && developer.isAvailable;
// }).reduce((total, developer) => {
//     return total + developer.experience;
// }, 0);
// console.log(availableTypeScriptExperience);
// const totalExperience = developers.reduce((total, developer) => {
//     return developer.experience + total;
// }, 0);
// console.log(totalExperience);
// const hasSeniorDeveloper = developers.some((developer) => {
//     return developer.experience >= 5;
// });
// console.log(hasSeniorDeveloper);
// const experiencedDeveloper = developers.find((developer) => {
//     return developer.experience >= 4;
// });
// console.log(experiencedDeveloper);
// const typeScriptDevelopersName = developers.filter((developer) => {
//     return developer.language === 'TypeScript';
// }).map((developer) => {
//     return developer.name;
// });
// console.log(typeScriptDevelopersName);
// const availableDevelopers = developers.filter((developer) => {
//     return developer.isAvailable;
// });
// console.log(availableDevelopers);
// const words = ['cat', 'javascript', 'developer', 'code', 'frontend'];
// const longestWord = words.reduce((longest, word) => {
//     return word.length > longest.length ? word : longest;
// }, words[0]);
// console.log(longestWord);
// const word = 'javascript';
// const letters = word.split('');
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const vowelLetters = letters.filter((letter) => {
//   return vowels.includes(letter);
// });
// console.log(vowelLetters.length);
// const numbers = [14, 3, 27, 8, 19, 6, 11];
// const smallestOddNumber = numbers.reduce((smallest, number) => {
//     return number % 2 !== 0 && number < smallest ? number : smallest;
// }, numbers[0]);
// console.log(smallestOddNumber);
// const numbers = [15, 4, 22, 9, 31, 18, 7];
// const largestOddNumber = numbers.reduce((highest, number) => {
//     return number % 2 !== 0 && number > highest ? number : highest;
// }, numbers[0]);
// console.log(largestOddNumber);
// const numbers = [3, 7, 12, 5, 18, 21, 4, 10];
// const numbersGreaterThanFiveAndEven = numbers.reduce((count, number) => {
//     if (number > 5 && number % 2 === 0) {
//         return count + 1;
//     }
//     return count;
// }, 0);
// console.log(numbersGreaterThanFiveAndEven);
// const numbers = [5, 12, 8, 21, 15, 3];
// const totalSumGreaterThanTen = numbers.reduce((total, number) => {
//     if (number > 10) {
//         return number + total;
//     }
//     return total;
// }, 0);
// console.log(totalSumGreaterThanTen);
// const numbers = [4, 7, 10, 3, 8, 11, 14];
// const evenNumbers = numbers.reduce((count, number) => {
//   if (number % 2 === 0) {
//     return (count + 1);
//   }
//   return count;
// }, 0);
// console.log(evenNumbers);
// const numbers = [12, 45, 7, 89, 34];
// const smallestNumber = numbers.reduce((lowest, num) => {
//     return num < lowest ? num : lowest;
// }, numbers[0]);
// console.log(smallestNumber);
// const numbers = [12, 45, 7, 89, 34];
// const largestNumber = numbers.reduce((highest, num) => {
//     return highest < num ? num : highest;
// }, numbers[0]);
// console.log(largestNumber);
// const word = 'frontend';
// const reverseWord = word.split('').reverse().join('');
// const isPalindrome = word === reverseWord;
// console.log(isPalindrome);
// const word = 'car';
// const reverseWord = word.split('').reverse().join('');
// const isPalindrome = word === reverseWord;
// console.log(isPalindrome);
// const word = 'racecar';
// const reversedWord = word.split('').reverse().join('');
// const isPalindrome = word === reversedWord;
// console.log(isPalindrome);
// const word = 'frontend developer';
// const reverseWord = word.split('').reverse().join('');
// console.log(reverseWord);
// const word = 'developer';
// const letters = word.split('');
// const reverseLetters = letters.reverse();
// const reverseWord = reverseLetters.join('');
// console.log(reverseWord);
// const word = 'frontend';
// const letters = word.split('');
// const reversedLetters = letters.reverse();
// const reverseWord = reversedLetters.join('');
// console.log(reverseWord);
// for (let number = 1; number <= 100; number++) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (number % 3 === 0) {
//     console.log('Fizz');
//   } else if (number % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(number);
//   }
// }
// for (let number = 1; number <= 20; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (number % 3 === 0) {
//         console.log('Fizz');
//     } else if (number % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(number);
//     }
// };
// const number = 15;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log('FizzBuzz');
// } else if (number % 3 === 0) {
//     console.log('Fizz');
// } else if (number % 5 === 0) {
//     console.log('Buzz');
// } else {
//     console.log(number);
// }
// const number = 15;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log('FizzBuzz');
// }
// const number = 10;
// if (number % 5 === 0) {
//     console.log('Buzz');
// }
// const number = 9;
// if (number % 3 === 0) {
//     console.log('Fizz');
// }
