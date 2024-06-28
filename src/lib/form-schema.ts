import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema =z.object({
    roles: z.string({required_error: "Job Title is required"}).min(5, {message: 'Job Title must be at least 5 characters'}),
    jobType: z.enum(JOBTYPES, {required_error: "You need to select a job type"}),
    salaryFrom: z.string({required_error: "Salary is required"}),
    salaryTo: z.string({required_error: "Salary is required"}),
    categoryId: z.string({required_error: "You need to select a category"}),
    requiredSkills : z.string().array().nonempty({message: 'Please add at least 1 skill'}),
    jobDescription : z.string({required_error: "Job Description is required"}).min(10, {message: 'Job Description must be at least 10 characters'}),
    responsibility : z.string({required_error: "Responsibilities is required"}).min(10, {message: 'Responsibility must be at least 10 characters'}),
    whoYouAre : z.string({required_error: "Who You Are is required"}).min(10, {message: 'Who You Are must be at least 10 characters'}),
    niceToHave : z.string({required_error: "Nice To Have is required"}).min(10, {message: 'Nice To Have must be at least 10 characters'}),
    benefits: z.object({
        benefit: z.string(),
		description: z.string()},{required_error: "Please add at least 1 benefit"}).array().nonempty({message: 'Please add at least 1 benefit'})
  })

export const overviewSchema = z.object({
    image: z.any().refine((item:any)=> item?.name, {message: "Image is required"}),
    name: z.string({required_error: "Name is required"}),
    website: z.string({required_error: "Website is required"}),
    location: z.string({required_error: "Location is required"}),
    employee: z.string({required_error: "Employee is required"}),
    industry: z.string({required_error: "Industry is required"}),
    dateFounded: z.date({required_error: "Date Founded is required"}),
    techstack: z.string({required_error: "Please add at least 1 tech stack"}).array().nonempty({message: 'Please add at least 1 tech stack'}),
    description: z.string({required_error: "Description is required"})
})