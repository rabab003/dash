import React from "react";
import Aside from "./Aside/page";

const page = () => {
  return (
    <>
      <div className="flex">
        <Aside />
        this is the rest content
      </div>
    </>
  );
};

export default page;
