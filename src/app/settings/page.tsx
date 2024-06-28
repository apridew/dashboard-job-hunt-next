import type { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewForm from "@/components/forms/OverviewForm";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => {
  return (
    <>
      <div className="text-3xl font-semibold mb-5">Settings</div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="social">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview"><OverviewForm/></TabsContent>
        <TabsContent value="social">Social Links</TabsContent>
        <TabsContent value="teams">Teams</TabsContent>
      </Tabs>
    </>
  );
};

export default SettingsPage;
