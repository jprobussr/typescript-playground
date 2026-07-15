"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studyGroups_1 = require("./studyGroups");
const courses_1 = require("./courses");
const searchEvents = (options) => {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
        return false;
    });
};
let enrolledEvents = [];
const enroll = (event) => {
    enrolledEvents.push(event);
};
enroll(studyGroups_1.default[0]);
console.log(enrolledEvents);
