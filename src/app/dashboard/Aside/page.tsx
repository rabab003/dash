import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-neutral-800 h-screen w-1/5 pt-5 px-5">
        <h2 className="text-2xl font-semibold">Learnly</h2>

        <div>
          <div className="px-2 py-2 mt-5 bg-neutral-900 rounded-md">
            <Link href="dash">
              <p className="font-semibold">Home</p>
            </Link>
          </div>
          <div className="px-2 py-2 mt-5  rounded-md">
            <Link href="dash">
              <p className="font-semibold">About</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
