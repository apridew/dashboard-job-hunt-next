import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge";
import ButtonAction from "@/components/organisms/ButtonAction";

interface JobListingsPageProps {}

const JobListingsPage: FC<JobListingsPageProps> = () => {
  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>
      <Table className="mt-5">
        <TableCaption>A list of job listings.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_LISTING_COLUMNS.map((column, idx) => (
              <TableHead key={idx}>{column}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_LISTING_DATA.map((data, idx) => (
            <TableRow key={idx}>
              <TableCell>{data.roles}</TableCell>
              <TableCell>
                <Badge>{data.status}</Badge>
              </TableCell>
              <TableCell>{data.datePosted}</TableCell>
              <TableCell>{data.dueDate}</TableCell>
              <TableCell>
                <Badge variant={"outline"}>{data.jobType}</Badge>
              </TableCell>
              <TableCell>{data.applicants}</TableCell>
              <TableCell>
                {data.applicants}/{data.needs}
              </TableCell>
              <TableCell>
                <ButtonAction url={"job-detail/1"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobListingsPage;
