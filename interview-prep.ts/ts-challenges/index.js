const applications = [
    {
        company: 'TechFlow',
        position: 'Frontend Developer',
        salary: 72000,
        remote: true,
        status: 'interview',
    },
    {
        company: 'DataCore',
        position: 'Junior Developer',
        salary: 65000,
        remote: false,
        status: 'applied',
    },
    {
        company: 'PixelWorks',
        position: 'React Developer',
        salary: 78000,
        remote: true,
        status: 'offer',
    },
    {
        company: 'CloudNine',
        position: 'TypeScript Developer',
        salary: 82000,
        remote: true,
        status: 'rejected',
    },
];
const getHighPayingRemoteSalary = (applications) => {
    let totalSalary = 0;
    for (let application of applications) {
        if (application.remote && application.salary >= 75000) {
            totalSalary += application.salary;
        }
    }
    return totalSalary;
};
console.log(getHighPayingRemoteSalary(applications));
// const getTotalInterviewSalary = (applications: JobApplication[]): number => {
//   let totalSalary = 0;
//   for (let application of applications) {
//     if (application.status === 'interview') {
//       totalSalary += application.salary;
//     }
//   }
//   return totalSalary;
// };
// console.log(getTotalInterviewSalary(applications));
// const getTotalRemoteSalary = (applications: JobApplication[]): number => {
//   let totalSalary = 0;
//   for (let application of applications) {
//     if (application.remote) {
//       totalSalary += application.salary
//     }
//   }
//   return totalSalary;
// };
// console.log(getTotalRemoteSalary(applications));
// const getHighPayingJobs = (applications: JobApplication[]): string[] => {
//   const positions: string[] = [];
//   for (let application of applications) {
//     if (application.salary >= 75000) {
//       positions.push(application.position);
//     }
//   }
//   return positions;
// };
// console.log(getHighPayingJobs(applications));
// const getRemoteCompanyNames = (applications: JobApplication[]): string[] => {
//   const remoteCompanies: string[] = [];
//   for (let application of applications) {
//     if (application.remote) {
//       remoteCompanies.push(application.company);
//     }
//   }
//   return remoteCompanies;
// };
// console.log(getRemoteCompanyNames(applications));
// const getInterviewCount = (applications: JobApplication[]): number => {
//   let interviewCount = 0;
//   for (let application of applications) {
//     if (application.status === 'interview') {
//       interviewCount++;
//     }
//   }
//   return interviewCount;
// }
// console.log(getInterviewCount(applications));
// const getRemoteApplications = (applications: JobApplication[]): number => {
//   let remoteCount = 0;
//   for (let application of applications) {
//     if (application.remote) {
//       remoteCount++;
//     }
//   }
//   return remoteCount;
// };
// console.log(getRemoteApplications(applications));
// type JobStatus = 'applied' | 'interview' | 'rejected' | 'offer';
// type JobApplication = {
//   id: number;
//   company: string;
//   title: string;
//   salary: number;
//   remote: boolean;
//   status: JobStatus;
//   skills: string[];
// };
// const applications: JobApplication[] = [
//   {
//     id: 1,
//     company: 'TechNova',
//     title: 'Junior Front-End Developer',
//     salary: 62000,
//     remote: true,
//     status: 'interview',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//   },
//   {
//     id: 2,
//     company: 'DataForge',
//     title: 'TypeScript Developer',
//     salary: 72000,
//     remote: true,
//     status: 'applied',
//     skills: ['JavaScript', 'TypeScript', 'React'],
//   },
//   {
//     id: 3,
//     company: 'BluePeak',
//     title: 'Web Developer',
//     salary: 58000,
//     remote: false,
//     status: 'rejected',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//   },
//   {
//     id: 4,
//     company: 'CloudWorks',
//     title: 'Full-Stack Developer',
//     salary: 78000,
//     remote: true,
//     status: 'offer',
//     skills: ['TypeScript', 'React', 'Node.js', 'Express'],
//   },
//   {
//     id: 5,
//     company: 'Pixel Labs',
//     title: 'React Developer',
//     salary: 68000,
//     remote: false,
//     status: 'interview',
//     skills: ['JavaScript', 'React', 'TypeScript'],
//   },
// ];
// const getHighestPayingRemoteJob = (applications: JobApplication[]): JobApplication | undefined => {
//     let highestPayingJob: JobApplication | undefined;
//     for (let application of applications) {
//         if (application.remote) {
//             if (!highestPayingJob || application.salary > highestPayingJob.salary) {
//                 highestPayingJob = application;
//             }
//         }
//     }
//     return highestPayingJob;
// };
// const getAverageInterviewSalary = (applications: JobApplication[]): number => {
//     let totalSalary = 0;
//     let interviewCount = 0;
//     for (let application of applications) {
//         if (application.status === 'interview') {
//             totalSalary += application.salary;
//             interviewCount += 1;
//         }
//     }
//     return totalSalary / interviewCount;
// };
// console.log(getAverageInterviewSalary(applications));
// const getAverageRemoteSalary = (applications: JobApplication[]): number => {
//     let totalSalary = 0;
//     let remoteCount= 0;
//     for (let application of applications) {
//         if (application.remote) {
//             totalSalary += application.salary
//             remoteCount += 1;
//         }
//     }
//     return totalSalary / remoteCount;
// };
// console.log(getAverageRemoteSalary(applications));
// type Lesson = {
//   id: number;
//   title: string;
//   duration: number;
//   completed: boolean;
// };
// type Course = {
//   id: number;
//   title: string;
//   category: string;
//   lessons: Lesson[];
// };
// const courses: Course[] = [
//   {
//     id: 1,
//     title: 'TypeScript Fundamentals',
//     category: 'Programming',
//     lessons: [
//       { id: 101, title: 'Types', duration: 12, completed: true },
//       { id: 102, title: 'Interfaces', duration: 15, completed: true },
//       { id: 103, title: 'Functions', duration: 10, completed: false },
//     ],
//   },
//   {
//     id: 2,
//     title: 'React Basics',
//     category: 'Frontend',
//     lessons: [
//       { id: 201, title: 'Components', duration: 8, completed: true },
//       { id: 202, title: 'Props', duration: 14, completed: false },
//       { id: 203, title: 'State', duration: 18, completed: false },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Express Essentials',
//     category: 'Backend',
//     lessons: [
//       { id: 301, title: 'Routes', duration: 11, completed: true },
//       { id: 302, title: 'Middleware', duration: 13, completed: true },
//       { id: 303, title: 'REST APIs', duration: 16, completed: true },
//     ],
//   },
//   {
//     id: 4,
//     title: 'CSS Layouts',
//     category: 'Frontend',
//     lessons: [
//       { id: 401, title: 'Flexbox', duration: 9, completed: true },
//       { id: 402, title: 'Grid', duration: 12, completed: true },
//       { id: 403, title: 'Responsive Design', duration: 7, completed: true },
//     ],
//   },
// ];
// const getCoursesWithAllLessonsIncomplete = (courses: Course[]): string[] => {
//     const courseTitles: string[] = [];
//     for (let course of courses) {
//         let allLessonsIncomplete = true;
//         for (let lesson of course.lessons) {
//             if (lesson.completed) {
//                 allLessonsIncomplete = false;
//             }
//         }
//         if (allLessonsIncomplete) {
//             courseTitles.push(course.title);
//         }
//     }
//     return courseTitles;
// }
// console.log(getCoursesWithAllLessonsIncomplete(courses));
// const getCoursesWithAllLessonsOverTen = (courses: Course[]): string[] => {
//     let courseTitles: string[] = [];
//     for (let course of courses) {
//         let allLongLessons = true;
//         for (let lesson of course.lessons) {
//             if (lesson.duration <= 10) {
//                 allLongLessons = false;
//             }
//         }
//         if (allLongLessons) {
//             courseTitles.push(course.title);
//         }
//     }
//     return courseTitles;
// }
// console.log(getCoursesWithAllLessonsOverTen(courses));
// const getCoursesWithNoShortLessons = (courses: Course[]): string[] => {
//     const courseTitles: string[] = [];
//     for (let course of courses) {
//         let allLessonsLongEnough = true;
//         for (let lesson of course.lessons) {
//             if (lesson.duration < 12) {
//                 allLessonsLongEnough = false;
//             }
//         }
//         if (allLessonsLongEnough) {
//             courseTitles.push(course.title)
//         }
//     }
//     return courseTitles;
// };
// console.log(getCoursesWithNoShortLessons(courses));
// const getCoursesWithAllLessonsCompleted = (courses: Course[]): string[] => {
//     const courseTitles: string[] = [];
//     for (let course of courses) {
//         let allLessonsCompleted = true;
//         for (let lesson of course.lessons) {
//             if (!lesson.completed) {
//                 allLessonsCompleted = false;
//             }
//         }
//         if (allLessonsCompleted) {
//             courseTitles.push(course.title);
//         }
//     }
//     return courseTitles;
// };
// console.log(getCoursesWithAllLessonsCompleted(courses));
// const getCoursesWithAllLessonsLongEnough = (courses: Course[]): string[] => {
//   const longerLessons: string[] = [];
//   for (let course of courses) {
//     let allLessonsLongEnough = true;
//     for (let lesson of course.lessons) {
//         if (lesson.duration < 10) {
//             allLessonsLongEnough = false;
//         }
//     }
//     if (allLessonsLongEnough) {
//         longerLessons.push(course.title)
//     }
//   }
//   return longerLessons;
// };
// console.log(getCoursesWithAllLessonsLongEnough(courses));
// type Lesson = {
//   title: string;
//   completed: boolean;
// };
// type Course = {
//   name: string;
//   lessons: Lesson[];
// };
// const courses: Course[] = [
//   {
//     name: 'JavaScript',
//     lessons: [
//       { title: 'Functions', completed: true },
//       { title: 'Objects', completed: true },
//     ],
//   },
//   {
//     name: 'TypeScript',
//     lessons: [
//       { title: 'Types', completed: true },
//       { title: 'Interfaces', completed: false },
//     ],
//   },
//   {
//     name: 'Express',
//     lessons: [
//       { title: 'Routes', completed: true },
//       { title: 'Middleware', completed: true },
//     ],
//   },
// ];
// const getCoursesWithAllLessonsCompleted = (courses: Course[]): string[] => {
//     const courseName: string[] = [];
//     for (let course of courses) {
//         let hasCompletedCourse = true;
//         for (let lesson of course.lessons) {
//             if (!lesson.completed) {
//                 hasCompletedCourse = false;
//             }
//         }
//         if (hasCompletedCourse) {
//             courseName.push(course.name);
//         }
//     }
//     return courseName;
// }
// console.log(getCoursesWithAllLessonsCompleted(courses));
// type Item = {
//   name: string;
//   delivered: boolean;
// };
// type Order = {
//   id: number;
//   items: Item[];
// };
// const orders: Order[] = [
//   {
//     id: 101,
//     items: [
//       { name: 'Keyboard', delivered: true },
//       { name: 'Mouse', delivered: false },
//     ],
//   },
//   {
//     id: 102,
//     items: [
//       { name: 'Monitor', delivered: true },
//       { name: 'Cable', delivered: true },
//     ],
//   },
//   {
//     id: 103,
//     items: [
//       { name: 'Desk', delivered: false },
//       { name: 'Chair', delivered: false },
//     ],
//   },
// ];
// const getOrderIdsWithAtLeastOneUndeliveredItem = (orders: Order[]): number[] => {
//     const orderIds: number[] = [];
//     for (let order of orders) {
//         let hasUndeliveredItem = false;
//         for (let item of order.items) {
//             if (!item.delivered) {
//                 hasUndeliveredItem = true;
//             }
//         }
//         if (hasUndeliveredItem) {
//             orderIds.push(order.id)
//         }
//     }
//     return orderIds
// };
// console.log(getOrderIdsWithAtLeastOneUndeliveredItem(orders));
// type Product = {
//   name: string;
//   inStock: boolean;
// };
// type Store = {
//   name: string;
//   products: Product[];
// };
// const stores: Store[] = [
//   {
//     name: 'Tech World',
//     products: [
//       { name: 'Laptop', inStock: true },
//       { name: 'Mouse', inStock: true },
//     ],
//   },
//   {
//     name: 'Home Shop',
//     products: [
//       { name: 'Lamp', inStock: true },
//       { name: 'Chair', inStock: false },
//     ],
//   },
//   {
//     name: 'Game Zone',
//     products: [
//       { name: 'Controller', inStock: true },
//       { name: 'Headset', inStock: true },
//     ],
//   },
// ];
// const getStoresWithAllProductsInStock = (stores: Store[]): string[] => {
//     const storeNames: string[] = [];
//     for (let store of stores) {
//         let allProductsInStock = true;
//         for (let product of store.products) {
//             if (!product.inStock) {
//                 allProductsInStock = false;
//             }
//         }
//         if (allProductsInStock) {
//             storeNames.push(store.name);
//         }
//     }
//     return storeNames;
// }
// console.log(getStoresWithAllProductsInStock(stores));
// type Course = {
//   title: string;
//   passed: boolean;
// };
// type Student = {
//   name: string;
//   courses: Course[];
// };
// const students: Student[] = [
//   {
//     name: 'Ava',
//     courses: [
//       { title: 'Math', passed: true },
//       { title: 'Science', passed: true },
//     ],
//   },
//   {
//     name: 'Ethan',
//     courses: [
//       { title: 'Math', passed: true },
//       { title: 'Science', passed: false },
//     ],
//   },
//   {
//     name: 'Mia',
//     courses: [
//       { title: 'Math', passed: false },
//       { title: 'Science', passed: false },
//     ],
//   },
// ];
// const getStudentsWithAtLeastOneFailedCourse = (students: Student[]): string[] => {
//     const studentNames: string[] = [];
//     for (let student of students) {
//         let hasFailedCourse = false;
//         for (let course of student.courses) {
//             if (!course.passed) {
//                 hasFailedCourse = true;
//             }
//         }
//         if (hasFailedCourse) {
//             studentNames.push(student.name);
//         }
//     }
//     return studentNames;
// }
// console.log(getStudentsWithAtLeastOneFailedCourse(students));
