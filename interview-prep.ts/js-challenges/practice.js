const username = 'john_probus';
const isValidUserName = (username) => {
    return username.length >= 6 && username.includes('_');
};
console.log(isValidUserName(username));
// type User = {
//   username: string;
//   isAdmin: boolean;
// };
// const users: User[] = [
//   { username: 'maya', isAdmin: false },
//   { username: 'liam', isAdmin: false },
//   { username: 'sofia', isAdmin: true },
//   { username: 'noah', isAdmin: false },
// ];
// const getAdminUserName = (users: User[]): string => {
//   for (let user of users) {
//     if (user.isAdmin) {
//       return user.username;
//     }
//   }
//   return `Admin not found.`;
// }
// console.log(getAdminUserName(users));
// const numbers = [3, 8, 12, 5, 20, 7];
// const countEvenNumbers = (number: number[]): number => {
//   let count = 0;
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       count += 1;
//     }
//   }
//   return count;
// };
// console.log(countEvenNumbers(numbers));
// type Employee = {
//   name: string;
//   hoursWorked: number;
// };
// const employee: Employee = {
//   name: 'Maya',
//   hoursWorked: 43,
// };
// const getWorkStatus = (employee: Employee): string => {
//   if (employee.hoursWorked >= 40) {
//     return `${employee.name} worked full-time this week.`;
//   } else {
//     return `${employee.name} worked part-time this week.`;
//   }
// };
// console.log(getWorkStatus(employee));
// const temperatures = [72, 88, 95, 67, 101, 84];
// const getHotTemps = (temperatures: number[]): number[] => {
//   const hotTemps: number[] = [];
//   for (let temp of temperatures) {
//     if (temp >= 90) {
//       hotTemps.push(temp);
//     }
//   }
//   return hotTemps;
// };
// console.log(getHotTemps(temperatures));
// const email = '  JOHN.PROBUS@EXAMPLE.COM  ';
// const normalizeEmail = (str: string): string => {
//   return str.trim().toLowerCase();
// }
// console.log(normalizeEmail(email));
// type Order = {
//   id: number;
//   status: 'pending' | 'shipped' | 'delivered';
//   total: number;
// };
// const order: Order = {
//   id: 101,
//   status: 'delivered',
//   total: 125,
// };
// const getOrderMessage = (order: Order): string => {
//   if (order.status === 'pending') {
//     return `Order ${order.id} is still pending.`;
//   } else if (order.status === 'shipped') {
//     return `Order ${order.id} has shipped.`;
//   } else {
//     return `Order ${order.id} was delivered.`;
//   }
// };
// console.log(getOrderMessage(order));
// type Student = {
//   name: string;
//   score: number;
// };
// const students: Student[] = [
//   { name: 'Maya', score: 88 },
//   { name: 'Liam', score: 67 },
//   { name: 'Sofia', score: 94 },
//   { name: 'Noah', score: 72 },
// ];
// const getPassingStudentNames = (students: Student[]): string[] => {
//   const passingStudents: string[] = [];
//   for (let student of students) {
//     if (student.score >= 70) {
//       passingStudents.push(student.name);
//     }
//   }
//   return passingStudents;
// };
// console.log(getPassingStudentNames(students));
// type Product = {
//   name: string;
//   price: number;
//   inStock: boolean;
// };
// const product: Product = {
//   name: 'Mechanical Keyboard',
//   price: 89.99,
//   inStock: false,
// };
// const getProductMessage = (product: Product): string => {
//   if (product.inStock) {
//     return `${product.name} costs $${product.price} and is in stock`;
//   } else {
//     return `${product.name} is currently unavailable.`;
//   }
// };
// console.log(getProductMessage(product));
// const developers = [
//   {
//     name: 'Maya',
//     experience: 4,
//     isAvailable: true,
//   },
//   {
//     name: 'Liam',
//     experience: 2,
//     isAvailable: false,
//   },
//   {
//     name: 'Sofia',
//     experience: 5,
//     isAvailable: true,
//   },
// ];
// const getAvailableDeveloperNames = () => {
//   let availableDevelopers = [];
//   for (let developer of developers) {
//     if (developer.isAvailable) {
//       availableDevelopers.push(developer.name);
//     }
//   }
//   return availableDevelopers;
// };
// console.log(getAvailableDeveloperNames());
// for (let developer of developers) {
//     if (developer.isAvailable) {
//         console.log(developer.name);
//     }
// };
// const scores = [82, 45, 91, 67, 38];
// for (let score of scores) {
//   if (score >= 70) {
//     console.log(score);
//   }
// }
// const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
// for (let skill of skills) {
//     console.log(skill);
// }
// const password = 'frontend123';
// let passwordMessage = '';
// if (password.length >= 8) {
//     passwordMessage = 'Password is long enough.';
// } else {
//     passwordMessage = 'Password is too short.';
// }
// console.log(passwordMessage);
// const username = '  john_probus  ';
// const cleanUsername = username.toUpperCase().trim();
// console.log(cleanUsername);
// type Developer = {
//   name: string;
//   role: string;
//   experience: number;
//   isAvailable: boolean;
// };
// const developer: Developer = {
//   name: 'John',
//   role: 'Frontend Developer',
//   experience: 2,
//   isAvailable: true,
// };
// const updatedDeveloper: Developer = {
//   ...developer,
//   experience: 3,
//   isAvailable: false,
// };
// const getDeveloperStatus = (developer: Developer): string => {
//   if (developer.isAvailable) {
//     return `${developer.name} is available`;
//   } else {
//     return `${developer.name} is not available`;
//   }
// };
// console.log(getDeveloperStatus(updatedDeveloper));
// let availabilityMessage = '';
// if (updatedDeveloper.isAvailable) {
//   availabilityMessage = `${updatedDeveloper.name} is available for work.`;
// } else {
//   availabilityMessage = `${updatedDeveloper.name} is not available for work.`;
// }
// console.log(availabilityMessage);
// const developerSummary = `${developer.name} is a ${developer.role} with ${developer.experience} years of experience.`;
// console.log(developerSummary);
