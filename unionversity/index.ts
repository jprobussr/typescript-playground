import courses from "./courses";


const allCourses = courses.filter((course) => {
    return course.eventType.includes('course');
});

console.log(allCourses);