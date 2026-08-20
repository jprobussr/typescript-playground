const developers = [
    { name: 'Alex', experience: 2 },
    { name: 'Jordan', experience: 5 },
    { name: 'Taylor', experience: 1 },
    { name: 'Morgan', experience: 7 }
];
const developersNamesWithAtleastThreeYearsExperience = developers.filter((developer) => {
    return developer.experience >= 3;
}).map((developer) => {
    return developer.name;
});
console.log(developersNamesWithAtleastThreeYearsExperience);
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
