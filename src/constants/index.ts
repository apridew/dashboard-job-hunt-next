import { EnumValues } from "zod";

export const JOBTYPES : EnumValues=['Full Time', 'Part Time', 'Remote', 'Internship']

export const JOB_LISTING_COLUMNS : string[]=['Roles', 'Status', 'Date Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs']

export const JOB_LISTING_DATA = [
    {
        roles : 'Frontend Developer', 
        status : 'Open', 
        datePosted : '12 Aug 2021', 
        dueDate : '12 Sept 2023', 
        jobType : 'Full Time', 
        applicants : 2, 
        needs : 10
    },
    {
        roles : 'Backend Developer', 
        status : 'Open', 
        datePosted : '12 Aug 2021', 
        dueDate : '12 Sept 2023', 
        jobType : 'Full Time', 
        applicants : 2, 
        needs : 10
    },
    {
        roles : 'Fullstack Developer', 
        status : 'Open', 
        datePosted : '12 Aug 2021', 
        dueDate : '12 Sept 2023', 
        jobType : 'Full Time', 
        applicants : 2, 
        needs : 10
    },
]