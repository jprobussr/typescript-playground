"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const allCourses = courses_1.default.filter((course) => {
    return course.eventType.includes('course');
});
console.log(allCourses);
