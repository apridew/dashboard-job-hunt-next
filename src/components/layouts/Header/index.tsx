'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { IoMdAdd } from "react-icons/io";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const router = useRouter()
  const navPostJob = () => router.push('/post-job')

  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div className="space-y-2">
        <div>Company</div>
        <div className="font-semibold">Facebook</div>
      </div>
      <div>
        <Button onClick={navPostJob} className="rounded-none py-3 px-6 tracking-wider"><IoMdAdd className="text-lg mr-2" />Post Job</Button>
      </div>
    </div>
  );
};

export default Header;
