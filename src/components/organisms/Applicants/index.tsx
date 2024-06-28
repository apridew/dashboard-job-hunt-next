import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge";
import ButtonAction from "../ButtonAction";

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = () => {
  return (
    <>
      <Table className="mt-3">
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COLUMNS.map((column, idx) => (
              <TableHead key={idx}>{column}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANT_DATA.map((data, idx) => (
            <TableRow key={idx}>
              <TableCell>{data.name}</TableCell>

              <TableCell>{data.appliedDate}</TableCell>
              <TableCell>
                <ButtonAction url={"job-detail/1"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Applicants;
