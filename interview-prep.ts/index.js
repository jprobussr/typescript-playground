const numbers = [5, 12, 18, 21, 30, 7];
const divisibleByThree = numbers.filter((number) => {
    return number % 3 === 0;
});
console.log(divisibleByThree);
// const words = ['apple', 'banana', 'kiwi', 'avocado', 'grape'];
// const startWordWithA = words.filter((word) => {
//     return word[0] === 'a';
// });
// console.log(startWordWithA);
// const scores = [88, 42, 75, 59, 91, 63];
// const passingScores = scores.filter((number) => {
//     return number >= 60;
// });
// console.log(passingScores);
// const temperatures = [32, 45, 61, 72, 84, 29];
// const aboveSixty = temperatures.filter((num) => {
//     return num >= 60;
// });
// console.log(aboveSixty);
// const names = ['John', 'Amy', 'Christopher', 'Mia', 'Alexander'];
// const longNames = names.filter((name) => {
//     return name.length > 5;
// });
// console.log(longNames);
// const numbers = [4, 9, 12, 17, 20, 25];
// const numbersGreaterThanFifteen = numbers.filter((number) => {
//     return number > 15;
// });
// console.log(numbersGreaterThanFifteen);
// const numbers = [3, 8, 11, 14, 19, 22];
// const evenNumbers = numbers.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(evenNumbers);
