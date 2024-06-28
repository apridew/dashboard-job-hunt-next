import Link from "next/link";
import type { FC } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";

interface JobDetailPageProps {}

const JobDetailPage: FC<JobDetailPageProps> = () => {
  return (
    <>
      <div className="inline-flex items-center gap-5 mb-5 ">
        <div className="cursor-pointer hover:text-primary">
          <Link href="/job-listings">
            <GoArrowLeft className="w-7 h-7" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">Front End Developer</div>
          <div className="tracking-wider">
            Technology . Full Time .
            <span className="text-gray-400"> 2/10 Hired</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-6">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default JobDetailPage;
