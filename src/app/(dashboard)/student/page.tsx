import Announcement from "@/components/Announcement";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Student (4A)</h1>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
