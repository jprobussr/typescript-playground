"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
const combineVolunteers = (volunteers) => {
    return volunteers.map((volunteer) => {
        let id = volunteer.id;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities,
        };
    });
};
const isVerified = (verified) => {
    if (typeof verified === 'string') {
        return (verified = 'Yes');
    }
    return verified;
};
const getHours = (activity) => {
    if ('hours' in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
};
const calculateHours = (volunteers) => {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours = hours + getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
};
const byHours = (a, b) => {
    return b.hours - a.hours;
};
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
const result = calculateHours(combinedVolunteers);
console.log(result);
console.log(result.sort(byHours));
