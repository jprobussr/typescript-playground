"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
console.log(studyGroups_1.default);
const searchEvents = (options) => {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
};
