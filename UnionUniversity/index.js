"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
const searchEvents = (options) => {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    const results = events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
        return false;
    });
    return results;
};
const searchResults = searchEvents({ query: 'art', eventType: 'courses' });
console.log('Search results include (courses with art)', searchResults);
