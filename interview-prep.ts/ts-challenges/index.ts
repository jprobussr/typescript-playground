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
