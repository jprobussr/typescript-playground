const applications = [
    {
        id: 1,
        company: 'TechNova',
        position: 'Frontend Developer',
        salary: 70000,
        status: 'Interview',
        isRemote: true,
    },
    {
        id: 2,
        company: 'BlueSoft',
        position: 'React Developer',
        salary: 75000,
        status: 'Applied',
        isRemote: false,
    },
    {
        id: 3,
        company: 'CloudPeak',
        position: 'Frontend Engineer',
        salary: 82000,
        status: 'Offer',
        isRemote: true,
    },
    {
        id: 4,
        company: 'PixelWorks',
        position: 'UI Developer',
        salary: 68000,
        status: 'Rejected',
        isRemote: false,
    },
    {
        id: 5,
        company: 'NextWave',
        position: 'Frontend Developer',
        salary: 78000,
        status: 'Interview',
        isRemote: true,
    },
    {
        id: 6,
        company: 'CodeBridge',
        position: 'React Engineer',
        salary: 73000,
        status: 'Applied',
        isRemote: true,
    },
];
const applicationStatusCounts = applications.reduce((counts, app) => {
    counts[app.status] += 1;
    return counts;
}, {
    Applied: 0,
    Interview: 0,
    Offer: 0,
    Rejected: 0,
});
console.log(applicationStatusCounts);
// const lowestSalaryApplication = applications.reduce((lowest, app) => {
//     return app.salary < lowest.salary ? app : lowest;
// }, applications[0]);
// console.log(lowestSalaryApplication);
// const highestSalaryApplication = applications.reduce((highest, app) => {
//     return app.salary > highest.salary ? app : highest;
// }, applications[0]);
// console.log(highestSalaryApplication);
// const interviewApplicationCount = applications.reduce((count, app) => {
//     if (app.status === 'Interview') {
//         return count + 1;
//     }
//     return count;
// }, 0);
// console.log(interviewApplicationCount);
// const totalApplicationSalary = applications.reduce((total, app) => {
//     return total + app.salary;
// }, 0);
// console.log(totalApplicationSalary);
// const allApplicationsHaveSalary = applications.every((app) => {
//     return app.salary > 0;
// });
// console.log(allApplicationsHaveSalary);
// const hasHighSalaryApplication = applications.filter((app) => {
//     return app.salary > 80000;
// });
// console.log(hasHighSalaryApplication);
// const applicationCompanies = applications.map((app) => {
//     return app.company;
// });
// console.log(applicationCompanies);
// const offerApplication = applications.find((app) => {
//     return app.status === 'Offer';
// });
// console.log(offerApplication);
// const remoteApplications = applications.filter((app) => {
//     return app.isRemote;
// });
// console.log(remoteApplications);
