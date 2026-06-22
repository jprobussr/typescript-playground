type JobApplication = {
  company: string;
  role: string;
  location: string;
  salary: number;
  isRemote: boolean;
  hasApplied: boolean;
};

const jobApplication: JobApplication[] = [
  {
    company: "TechBridge",
    role: "Front-End Developer",
    location: "Remote",
    salary: 70000,
    isRemote: true,
    hasApplied: true,
  },
  {
    company: "BluePeak Software",
    role: "React Developer",
    location: "Nashville",
    salary: 82000,
    isRemote: false,
    hasApplied: false,
  },
  {
    company: "CodeCraft",
    role: "Junior Front-End Engineer",
    location: "Remote",
    salary: 65000,
    isRemote: true,
    hasApplied: false,
  },
  {
    company: "DataNest",
    role: "UI Developer",
    location: "Louisville",
    salary: 76000,
    isRemote: false,
    hasApplied: true,
  },
];


const higherPay = jobApplication.filter((job) => {
  return job.salary >= 76000;
});

console.log(higherPay);