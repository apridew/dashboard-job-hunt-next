"use client";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface ButtonActionProps {
  url: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ url }) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(url)} size={"icon"} variant={"outline"}>
      <MoreVerticalIcon className="w-4 h-4" />
    </Button>
  );
};

export default ButtonAction;
