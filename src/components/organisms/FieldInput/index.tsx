import { Separator } from "@/components/ui/separator";
import type { FC, ReactNode } from "react";

interface FieldInputProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const FieldInput: FC<FieldInputProps> = ({ children, title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;