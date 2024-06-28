"use client";

import FieldInput from "@/components/organisms/FieldInput";
import Upload from "@/components/organisms/Upload";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EMPLOYEE_OPTIONS,
  INDUSTRY_OPTIONS,
  LOCATION_OPTIONS,
} from "@/constants";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { overviewSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import InputSkills from "@/components/organisms/InputSkills";
import Editor from "@/components/organisms/Editor";

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = () => {
  const [editorLoaded, SetEditorLoaded] = useState<boolean>(false);
  const form = useForm<z.infer<typeof overviewSchema>>({
    resolver: zodResolver(overviewSchema),
  });

  const onSubmit = (val: z.infer<typeof overviewSchema>) => {
    console.log(val);
  };

  useEffect(() => {
    SetEditorLoaded(true);
  }, []);

  return (
    <>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          This is company information that you can update anytime
        </div>
      </div>
      <Separator className="mb-3" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FieldInput
            title="Company Logo"
            subtitle="This image will be shown publicly as company logo."
          >
            <Upload form={form} name="image" />
          </FieldInput>

          <FieldInput
            title="Company Details"
            subtitle="Introduce your company core info quickly to users by fill up company details"
          >
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company name"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Website name"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[450px]">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION_OPTIONS.map((data, idx) => (
                          <SelectItem key={idx} value={data.id}>
                            {data.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-[450px] grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="employee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Employee" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE_OPTIONS.map((data, idx) => (
                            <SelectItem key={idx} value={data.id}>
                              {data.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INDUSTRY_OPTIONS.map((data, idx) => (
                            <SelectItem key={idx} value={data.id}>
                              {data.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateFounded"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date Founded</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[450px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <InputSkills
                form={form}
                name="techstack"
                label="Add Tech Stack"
              />
            </div>
          </FieldInput>

          <FieldInput
            title="About Company"
            subtitle="Brief description for your company. URLs are hyperlinked."
          >
            <Editor
              form={form}
              name={"description"}
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <div className="flex justify-end">
            <Button size={"lg"}>Save Changes</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default OverviewForm;
