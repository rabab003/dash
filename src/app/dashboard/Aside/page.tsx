import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-neutral-900 h-screen  flex items-start flex-col p-2 w-1/6 px-3">
        <h2 className="text-2xl font-semibold mb-5">Learnly</h2>

        <div className="space-y-12">
          <div className=" py-6">
            <div className="px-2 py-1 mt-1 bg-neutral-700 rounded-md">
              <Link href="dash">
                <p className="font-semibold">Quick Overview</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-1  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Courses</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Assignments</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Grades</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Notifications</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Settings</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Profile</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Messages</p>
              </Link>
            </div>
          </div>

          <div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Settings</p>
              </Link>
            </div>
            <div className="px-2 py-2 mt-2  rounded-md">
              <Link href="dash">
                <p className="font-semibold">Profile</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
