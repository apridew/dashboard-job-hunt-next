import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { GoHome } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { PiBuildings } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";
import { GrGroup, GrSchedule } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

interface SidebarProps {}

const dashboardItems = [
  { icon: <GoHome />, label: "Home" },
  { icon: <AiOutlineMessage />, label: "Messages" },
  { icon: <PiBuildings />, label: "Company Profile" },
  { icon: <GrGroup />, label: "All Applicants" },
  { icon: <FaWpforms />, label: "Job Listings" },
  { icon: <GrSchedule />, label: "My Schedule" },
];

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="pb-12 min-h-screen relative">
      <div className="space-y-4 py-4 fixed w-[18%]">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            {dashboardItems.map((item, idx) => (
              <Button
                key={idx}
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <div className="flex items-center gap-2">
                  <div className="text-lg">{item.icon}</div>
                  {item.label}
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div className="space-y-3">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <div className="flex items-center gap-2">
                  <IoSettingsOutline className="text-lg" />
                  Settings
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start text-red-500 rounded-none hover:text-red-500 hover:bg-red-100"
              >
                <div className="flex items-center gap-2">
                  <CiLogout className="text-lg" />
                  Logout
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
