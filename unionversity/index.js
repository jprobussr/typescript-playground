"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studyGroups_1 = __importDefault(require("./studyGroups"));
const courses_1 = __importDefault(require("./courses"));
const searchEvents = (options) => {
    const events = options.eventType === "courses" ? courses_1.default : studyGroups_1.default;
    const results = events.filter((event) => {
        if (typeof options.query === "number") {
            return event.id === options.query;
        }
        const query = options.query.toLowerCase();
        return event.title.toLowerCase().includes(query);
    });
    return results;
};
const groupResults = searchEvents({
    query: 2,
    eventType: "groups",
});
console.log(groupResults);
