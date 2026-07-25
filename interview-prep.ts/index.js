const developers = [
    {
        name: 'John',
        team: 'Frontend',
        projects: [
            { name: 'Portfolio', completed: true },
            { name: 'Dashboard', completed: false },
        ],
    },
    {
        name: 'Amy',
        team: 'Backend',
        projects: [
            { name: 'API', completed: true },
            { name: 'Authentication', completed: true },
        ],
    },
    {
        name: 'Chris',
        team: 'Frontend',
        projects: [{ name: 'Landing Page', completed: false }],
    },
    {
        name: 'Sarah',
        team: 'QA',
        projects: [
            { name: 'Regression Tests', completed: true },
            { name: 'Automation', completed: false },
        ],
    },
];
const nonFrontendDevelopersWithCompletedProjects = developers.filter((developer) => {
    return developer.team !== 'Frontend' && developer.projects.every((project) => {
        return project.completed;
    });
});
console.log(nonFrontendDevelopersWithCompletedProjects);
// const frontendDevelopersWithIncompleteProjects = developers.filter((developer) => {
//     return developer.team === 'Frontend' && developer.projects.some((project) => {
//         return project.completed === false;
//     });
// });
// console.log(frontendDevelopersWithIncompleteProjects);
// const developersWithIncompleteProjects = developers.filter((developer) => {
//     return developer.projects.some((project) => {
//         return project.completed === false;
//     });
// });
// console.log(developersWithIncompleteProjects);
// const developersWithAllProjectsCompleted = developers.filter((developer) => {
//     return developer.projects.every((project) => {
//         return project.completed;
//     });
// });
// console.log(developersWithAllProjectsCompleted);
// const developersWithCompletedProjects = developers.filter((developer) => {
//     return developer.projects.some((project) => {
//         return project.completed;
//     });
// });
// console.log(developersWithCompletedProjects);
// type Employee = {
//   name: string;
//   department: string;
//   yearsAtCompany: number;
// };
// const employees: Employee[] = [
//   {
//     name: 'John',
//     department: 'Engineering',
//     yearsAtCompany: 5,
//   },
//   {
//     name: 'Amy',
//     department: 'Marketing',
//     yearsAtCompany: 2,
//   },
//   {
//     name: 'Chris',
//     department: 'Engineering',
//     yearsAtCompany: 8,
//   },
//   {
//     name: 'Sarah',
//     department: 'HR',
//     yearsAtCompany: 1,
//   },
// ];
// const newerNonEngineeringEmployees = employees.filter((employee) => {
//     return employee.department !== 'Engineering' && (employee.yearsAtCompany === 1 || employee.yearsAtCompany === 2);
// });
// console.log(newerNonEngineeringEmployees);
// const engineeringEmployeesWithFiveOrEightYears = employees.filter(
//   (employee) => {
//     return (
//       employee.department === 'Engineering' &&
//       (employee.yearsAtCompany === 5 || employee.yearsAtCompany === 8)
//     );
//   },
// );
// console.log(engineeringEmployeesWithFiveOrEightYears);
// const newerMarketingOrHREmployees = employees.filter((employee) => {
//     return (employee.department === 'Marketing' || employee.department === 'HR') && employee.yearsAtCompany <= 2;
// });
// console.log(newerMarketingOrHREmployees);
// const engineeringEmployeesUnderEightYears = employees.filter((employee) => {
//     return employee.department === 'Engineering' && employee.yearsAtCompany < 8;
// });
// console.log(engineeringEmployeesUnderEightYears);
// const newerNonHREmployees = employees.filter((employee) => {
//     return employee.yearsAtCompany < 5 && employee.department !== 'HR';
// });
// console.log(newerNonHREmployees);
// const seniorOrHREmployees = employees.filter((employee) => {
//   return employee.yearsAtCompany >= 5 || employee.department === 'HR';
// });
// console.log(seniorOrHREmployees);
// const experiencedNonMarketingEmployees = employees.filter((employee) => {
//     return employee.yearsAtCompany > 1 && employee.department !== 'Marketing';
// });
// console.log(experiencedNonMarketingEmployees);
// const marketingOrOneYearEmployees = employees.filter((employee) => {
//     return employee.department === 'Marketing' || employee.yearsAtCompany === 1;
// });
// console.log(marketingOrOneYearEmployees);
// const engineeringOrHREmployees = employees.filter((employee) => {
//     return employee.department === 'Engineering' || employee.department === 'HR';
// });
// console.log(engineeringOrHREmployees);
// const employeeComitted = employees.filter((employee) => {
//     return employee.yearsAtCompany >= 2 && employee.yearsAtCompany < 8;
// });
// console.log(employeeComitted);
// const employeeUnderReview = employees.filter((employee) => {
//     return employee.department !== 'Engineering' && employee.yearsAtCompany < 3;
// });
// console.log(employeeUnderReview);
// const employeesNoHR = employees.filter((employee) => {
//     return employee.department !== 'HR';
// });
// console.log(employeesNoHR);
// const marketingEmployeeStar = employees.filter((employee) => {
//     return employee.department === 'Marketing' || employee.yearsAtCompany >= 5;
// });
// console.log(marketingEmployeeStar);
// const employeeStar = employees.filter((employee) => {
//     return employee.department === 'Engineering' && employee.yearsAtCompany >= 5;
// });
// console.log(employeeStar);
// const employeeFiveYears = employees.filter((employee) => {
//     return employee.yearsAtCompany >= 5;
// });
// console.log(employeeFiveYears);
// const employeeWithLongerNames = employees.filter((employee) => {
//     return employee.name.length > 4;
// });
// console.log(employeeWithLongerNames);
// const longTermEmployees = employees.filter((employee) => {
//     return employee.yearsAtCompany >= 3;
// });
// console.log(longTermEmployees);
// const engineers = employees.filter((employee) => {
//     return employee.department === 'Engineering';
// });
// console.log(engineers);
// const numbers = [5, 12, 18, 21, 30, 7];
// const divisibleByThree = numbers.filter((number) => {
//     return number % 3 === 0;
// });
// console.log(divisibleByThree);
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
