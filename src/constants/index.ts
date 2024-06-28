import { EnumValues } from "zod";

export const JOBTYPES : EnumValues=['Full Time', 'Part Time', 'Remote', 'Internship']

export const JOB_LISTING_COLUMNS : string[]=['Roles', 'Status', 'Date Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs']

export const JOB_APPLICANT_COLUMNS : string[]=['Name', 'Applied Date']

export const JOB_APPLICANT_DATA =[
    {
        name : 'John Doe', 
        appliedDate : '13 Feb 2024'
    }
]

export const JOB_LISTING_DATA = [
    {
        roles : 'Frontend Developer', 
        status : 'Open', 
        datePosted : '12 Feb 2024', 
        dueDate : '12 May 2024', 
        jobType : 'Full Time', 
        applicants : 2, 
        needs : 10
    },
    {
        roles : 'Backend Developer', 
        status : 'Open', 
        datePosted : '12 Feb 2024', 
        dueDate : '12 May 2024', 
        jobType : 'Full Time', 
        applicants : 2, 
        needs : 10
    },
    {
        roles : 'Fullstack Developer', 
        status : 'Open', 
        datePosted : '12 Feb 2024', 
        dueDate : '12 May 2024', 
        jobType : 'Full Time', 
        applicants : 2, 
        needs : 10
    },
]