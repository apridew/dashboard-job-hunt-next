import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { IoMdAdd } from "react-icons/io";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div className="space-y-2">
        <div>Company</div>
        <div className="font-semibold">Facebook</div>
      </div>
      <div>
        <Button className="rounded-none py-3 px-6 tracking-wider"><IoMdAdd className="text-lg mr-2" />Post Job</Button>
      </div>
    </div>
  );
};

export default Header;
