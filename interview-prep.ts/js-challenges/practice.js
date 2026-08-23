const developers = [
    {
        name: 'Maya',
        experience: 4,
        isAvailable: true,
    },
    {
        name: 'Liam',
        experience: 2,
        isAvailable: false,
    },
    {
        name: 'Sofia',
        experience: 5,
        isAvailable: true,
    },
];
const getAvailableDeveloperNames = () => {
    let availableDevelopers = [];
    for (let developer of developers) {
        if (developer.isAvailable) {
            availableDevelopers.push(developer.name);
        }
    }
    return availableDevelopers;
};
console.log(getAvailableDeveloperNames());
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
