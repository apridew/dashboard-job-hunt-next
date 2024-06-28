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

export const LOCATION_OPTIONS =[
    {id: "indnesia", name: 'Indonesia'},
    {id: "singapore", name: 'Singapore'},
    {id: "japan", name: 'Japan'},
    {id: "malaysia", name: 'Malaysia'},
    {id: "thailand", name: 'Thailand'},
]

export const EMPLOYEE_OPTIONS =[
    {id: "1-50", name: '1-50'},
    {id: "51-100", name: '51-100'},
    {id: "101-200", name: '101-200'},
    {id: "201-500", name: '201-500'},
    {id: "500", name: '500-above'},
]

export const INDUSTRY_OPTIONS =[
    {id: "technology", name: 'Technology'},
    {id: "finance", name: 'Finance'},
    {id: "healthcare", name: 'Healthcare'},
    {id: "education", name: 'Education'},
    {id: "other", name: 'Other'},
]