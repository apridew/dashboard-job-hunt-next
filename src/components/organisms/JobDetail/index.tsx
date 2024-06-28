import type { FC } from "react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { WiStars } from "react-icons/wi";

interface JobDetailProps {}

const jobDetailData = [
  {
    title: "Description",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique vero veritatis a aut, culpa iste officiis quas quis corrupti nam tempora sint laborum perferendis repudiandae blanditiis quisquam illum tenetur?",
  },
  {
    title: "Responsibilities",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique vero veritatis a aut, culpa iste officiis quas quis corrupti nam tempora sint laborum perferendis repudiandae blanditiis quisquam illum tenetur?",
  },
  {
    title: "Who You Are",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique vero veritatis a aut, culpa iste officiis quas quis corrupti nam tempora sint laborum perferendis repudiandae blanditiis quisquam illum tenetur?",
  },
  {
    title: "Nice To Have",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique vero veritatis a aut, culpa iste officiis quas quis corrupti nam tempora sint laborum perferendis repudiandae blanditiis quisquam illum tenetur?",
  },
];

const progressData = [
  { title: "Apply Before", value: "12 May 2024" },
  { title: "Job Posted On", value: "12 Feb 2024" },
  { title: "Job Type", value: "Full Time" },
  { title: "Salary", value: "$100-1k USD" },
];

const requiredSkills = ["React", "Next JS", "Tailwind CSS", "Javascript"];

const benefitsData = [
  {
    title: "Parking",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptas",
  },
  {
    title: "Paid Time Off",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptas",
  },
  {
    title: "Health Insurance",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptas",
  },
  {
    title: "Dental Insurance",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptas",
  },
];

const JobDetail: FC<JobDetailProps> = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          {jobDetailData.map((data, idx) => (
            <div key={idx}>
              <div className="text-3xl font-semibold">{data.title}</div>
              <div className="text-gray-500 mt-3">
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-3xl font-semibold">About this role</div>
          <div className="shadow p-3 text-center mt-6">
            1 <span className="text-gray-500">of 10 capacities</span>
            <Progress value={10} />
          </div>
          <div className="mb-10 my-6 space-y-5">
            {progressData.map((data, idx) => (
              <div className="flex justify-between" key={idx}>
                <div className="text-gray-500">{data.title}</div>
                <div className="font-semibold">{data.value}</div>
              </div>
            ))}
          </div>
          <Separator />
          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Category</div>
            <div className="space-x-5">
              <Badge>Technology</Badge>
            </div>
          </div>
          <Separator />
          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>
            <div className="space-x-5">
              {requiredSkills.map((data, idx) => (
                <Badge variant={"outline"} className="rounded-none" key={idx}>
                  {data}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <div className="text-3xl font-semibold mb-4">Perks & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {benefitsData.map((data, idx) => (
            <div key={idx}>
              <WiStars className="w-10 h-10 text-primary mb-6" />
              <div className="text-lg font-bold">{data.title}</div>
              <div className="text-gray-500 mt-3">
                <p>{data.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetail;
