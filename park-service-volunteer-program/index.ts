import { raccoonMeadowsVolunteers } from './raccoon-meadows-log';

const volunteerNames = raccoonMeadowsVolunteers.map((volunteer) => {
    return volunteer.name;
});

console.log(volunteerNames);

// const allActivitiesAreVerified = raccoonMeadowsVolunteers.every((volunteer) => {
//     return volunteer.activities.every((activity) => {
//         return activity.verified === 'Yes';
//     });
// });

// console.log(allActivitiesAreVerified);

// const everyVolunteerHasVerifiedActivity =  raccoonMeadowsVolunteers.every((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return activity.verified === 'Yes';
//     });
// });

// console.log(everyVolunteerHasVerifiedActivity);

// const everyVolunteerHasMultipleActivities = raccoonMeadowsVolunteers.every((volunteer) => {
//     return volunteer.activities.length > 1;
// });

// console.log(everyVolunteerHasMultipleActivities);

// const everyVolunteerIdIsAbove100 = raccoonMeadowsVolunteers.every((volunteer) => {
//     return volunteer.id > 100;
// });

// console.log(everyVolunteerIdIsAbove100);

// const everyVolunteerHasActivities = raccoonMeadowsVolunteers.every((volunteer) => {
//     return volunteer.activities.length >= 1;
// });

// console.log(everyVolunteerHasActivities);

// const hasEightHourActivity = raccoonMeadowsVolunteers.some((volunteer) => {
//   return volunteer.activities.some((activity) => {
//     return activity.hours === 8;
//   });
// });

// console.log(hasEightHourActivity);

// const hasUnverifiedActivity = raccoonMeadowsVolunteers.some((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return activity.verified === 'No';
//     });
// });

// console.log(hasUnverifiedActivity);

// const hasVolunteerWithMoreThanTwoActivities = raccoonMeadowsVolunteers.some(
//   (volunteer) => {
//     return volunteer.activities.length > 2;
//   },
// );

// console.log(hasVolunteerWithMoreThanTwoActivities);

// const hasVolunteerWithIdAbove105 = raccoonMeadowsVolunteers.some((volunteer) => {
//     return volunteer.id > 105;
// });

// console.log(hasVolunteerWithIdAbove105);

// const hasRajWardle = raccoonMeadowsVolunteers.some((volunteer) => {
//     return volunteer.name === 'Raj Wardle';
// });

// console.log(hasRajWardle);

// const volunteersWithLongActivities = raccoonMeadowsVolunteers.filter((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return activity.hours > 3;
//     });
// });

// console.log(volunteersWithLongActivities);

// const volunteersWithVerifiedActivities = raccoonMeadowsVolunteers.filter((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return activity.verified === 'Yes';
//     });
// });

// console.log(volunteersWithVerifiedActivities);

// const volunteersWithThreeHourActivity = raccoonMeadowsVolunteers.filter((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return activity.hours === 3;
//     });
// });

// console.log(volunteersWithThreeHourActivity);

// const volunteersWithIdAbove101 = raccoonMeadowsVolunteers.filter((volunteer) => {
//     return volunteer.id > 101;
// });

// console.log(volunteersWithIdAbove101);

// const volunteersWithMultipleActivities = raccoonMeadowsVolunteers.filter((volunteer) => {
//     return volunteer.activities.length > 1;
// });

// console.log(volunteersWithMultipleActivities);

// const volunteerWithUnverifiedActivity = raccoonMeadowsVolunteers.find((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return activity.verified === 'No';
//     });
// });

// console.log(volunteerWithUnverifiedActivity);

// const volunteerWithSixHourActivity = raccoonMeadowsVolunteers.find((volunteer) => {
//     return volunteer.activities.some((activity) => {
//         return  activity.hours === 6;
//     });
// });

// console.log(volunteerWithSixHourActivity);

// const volunteerWithThreeActivities = raccoonMeadowsVolunteers.find((volunteer) => {
//     return volunteer.activities.length === 3;
// });

// console.log(volunteerWithThreeActivities);

// const volunteerById = raccoonMeadowsVolunteers.find((volunteer) => {
//     return volunteer.id === 102;
// });

// console.log(volunteerById);

// const volunteerByName = raccoonMeadowsVolunteers.find((volunteer) => {
//     return volunteer.name === 'Leigh Gilmour';
// });

// console.log(volunteerByName);
