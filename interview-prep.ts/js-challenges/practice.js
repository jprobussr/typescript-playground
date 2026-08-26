const developers = [
    {
        name: 'Maya',
        projects: [
            { title: 'Portfolio', completed: true },
            { title: 'Dashboard', completed: false },
        ],
    },
    {
        name: 'Liam',
        projects: [
            { title: 'API', completed: true },
            { title: 'Blog', completed: true },
        ],
    },
];
const countDevelopersWithIncompleteProjects = (developers) => {
    let count = 0;
    for (let developer of developers) {
        for (let project of developer.projects) {
            if (!project.completed) {
                count += 1;
            }
        }
    }
    return count;
};
console.log(countDevelopersWithIncompleteProjects(developers));
// const getDeveloperWithAllProjectsCompleted = (developers: Developer[]): string[] => {
//   const developerNames: string[] = [];
//   for (let developer of developers) {
//     let allProjectsCompleted = true;
//     for (let project of developer.projects) {
//       if (!project.completed) {
//         allProjectsCompleted = false;
//       }
//     }
//     if (allProjectsCompleted) {
//       developerNames.push(developer.name);
//     }
//   }
//   return developerNames;
// };
// console.log(getDeveloperWithAllProjectsCompleted(developers));
// const getDeveloperNamesWithCompletedProjects = (
//   developers: Developer[],
// ): string[] => {
//   const developerNames: string[] = [];
//   for (let developer of developers) {
//     let hasCompletedProject = false;
//     for (let project of developer.projects) {
//       if (project.completed) {
//         hasCompletedProject = true;
//       }
//     }
//     if (hasCompletedProject) {
//       developerNames.push(developer.name);
//     }
//   }
//   return developerNames;
// };
// console.log(getDeveloperNamesWithCompletedProjects(developers));
// const getFirstCompletedProjectTitle = (developers: Developer[]): string => {
//   for (let developer of developers) {
//     for (let project of developer.projects) {
//       if (project.completed) {
//         return project.title;
//       }
//     }
//   }
//   return 'No completed project found.';
// }
// console.log(getFirstCompletedProjectTitle(developers));
// const getAllProjectTitles = (developers: Developer[]): string[] => {
//   const projectTitles: string[] = [];
//   for (let developer of developers) {
//     for (let project of developer.projects) {
//       projectTitles.push(project.title);
//     }
//   }
//   return projectTitles
// };
// console.log(getAllProjectTitles(developers));
// const countIncompleteProjects = (developers: Developer[]): number => {
//   let count = 0;
//   for (let developer of developers) {
//     for (let project of developer.projects) {
//       if (!project.completed) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }
// console.log(countIncompleteProjects(developers));
// const getCompletedProjectTitles = (developers: Developer[]): string[] => {
//   const completedProjects: string[] = [];
//   for (let developer of developers) {
//     for (let project of developer.projects) {
//       if (project.completed) {
//         completedProjects.push(project.title);
//       }
//     }
//   }
//   return completedProjects;
// }
// console.log(getCompletedProjectTitles(developers));
// const getDeveloperWithIncompleteProject = (developers: Developer[]): string => {
//   for (let developer of developers) {
//     for (let project of developer.projects) {
//       if (!project.completed) {
//         return developer.name;
//       }
//     }
//   }
//   return 'No incomplete project found.';
// };
// console.log(getDeveloperWithIncompleteProject(developers));
// type Developer = {
//   name: string;
//   experience: number;
//   isAvailable: boolean;
// };
// const developers: Developer[] = [
//   { name: 'Maya', experience: 4, isAvailable: true },
//   { name: 'Liam', experience: 2, isAvailable: true },
//   { name: 'Sofia', experience: 5, isAvailable: false },
//   { name: 'Noah', experience: 3, isAvailable: true },
// ];
// const getQualifiedDeveloperNames = (developers: Developer[]): string[] => {
//   const qualifiedDevelopers: string[] = [];
//   for (let developer of developers) {
//     if (developer.isAvailable && developer.experience >= 3) {
//       qualifiedDevelopers.push(developer.name);
//     }
//   }
//   return qualifiedDevelopers;
// };
// console.log(getQualifiedDeveloperNames(developers));
// const numbers = [4, 7, 10, 13, 18];
// const getEvenNumber = (numbers: number[]): number[] => {
//     let evenNumbers: number[] = [];
//     for (let number of numbers) {
//         if (number % 2 === 0) {
//             evenNumbers.push(number);
//         }
//     }
//     return evenNumbers;
// }
// console.log(getEvenNumber(numbers));
// type Course = {
//   title: string;
//   completed: boolean;
// };
// const courses: Course[] = [
//   { title: 'JavaScript', completed: true },
//   { title: 'TypeScript', completed: true },
//   { title: 'Express', completed: false },
// ];
// const getFirstIncompleteCourse = (courses: Course[]): string => {
//     for (let course of courses) {
//         if (!course.completed) {
//             return course.title;
//         }
//     }
//     return `All courses completed.`;
// }
// console.log(getFirstIncompleteCourse(courses));
// const usernames = ['maya', 'john_probus', 'liam', 'sofia_dev'];
// const countDeveloperUserNames = (users: string[]): number => {
//     let count = 0;
//     for (let user of users) {
//         if (user.includes('_')) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countDeveloperUserNames(usernames));
// type Job = {
//   title: string;
//   remote: boolean;
//   salary: number;
// };
// const jobs: Job[] = [
//   { title: 'Frontend Developer', remote: true, salary: 65000 },
//   { title: 'Support Specialist', remote: false, salary: 48000 },
//   { title: 'Junior Developer', remote: true, salary: 58000 },
//   { title: 'Web Designer', remote: false, salary: 52000 },
// ];
// const getRemoteJobsTitles = (jobs: Job[]): string[] => {
//     let remoteJobs: string[] = [];
//     for (let job of jobs) {
//         if (job.remote === true) {
//             remoteJobs.push(job.title);
//         }
//     }
//     return remoteJobs;
// }
// console.log(getRemoteJobsTitles(jobs));
// const scores = [55, 92, 76, 88, 43];
// const getFirstHighScore = (scores: number[]): number => {
//     for (let score of scores) {
//         if (score >= 80) {
//             return score;
//         }
//     }
//     return -1;
// }
// console.log(getFirstHighScore(scores));
// type Product = {
//     name: string;
//     inStock: boolean;
// }
// const products: Product[] = [
//   { name: 'Keyboard', inStock: true },
//   { name: 'Mouse', inStock: false },
//   { name: 'Monitor', inStock: true },
// ];
// const getInStockProductNames = (products: Product[]): string[] => {
//     let inStockNames: string[] = [];
//     for (let product of products) {
//         if (product.inStock) {
//            inStockNames.push(product.name);
//         }
//     }
//     return inStockNames;
// }
// console.log(getInStockProductNames(products));
// const ages = [17, 22, 16, 30, 19];
// const countAdults = (ages: number[]): number => {
//     let count = 0;
//     for (let age of ages) {
//         if (age >= 18) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countAdults(ages));
// const words = ['cat', 'elephant', 'dog', 'giraffe'];
// const getFirstLongWord = (words: string[]): string => {
//     for (let word of words) {
//         if (word.length > 5) {
//             return word;
//         }
//     }
//     return `No long word found.`;
// }
// console.log(getFirstLongWord(words));
// const names = ['Maya', 'Liam', 'Sofia', 'Noah'];
// const longerNames = (names: string[]): string[] => {
//   const longNames: string[] = [];
//   for (let name of names) {
//     if (name.length > 4) {
//       longNames.push(name);
//     }
//   }
//   return longNames;
// };
// console.log(longerNames(names));
// const prices = [25, 80, 120, 45, 200];
// const countExpensiveItems = (prices: number[]): number => {
//     let count = 0;
//     for (let price of prices) {
//         if (price >= 100) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countExpensiveItems(prices));
// const username = 'john_probus';
// const isValidUserName = (username: string): boolean => {
//   return username.length >= 6 && username.includes('_');
// };
// console.log(isValidUserName(username));
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
