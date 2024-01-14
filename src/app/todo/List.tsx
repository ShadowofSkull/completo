"use client";
import { useState } from "react";

const List = ({marginY}: {marginY: string}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div  className={"collapse collapse-arrow bg-base-200 w-80 mx-auto " + marginY}>
        <input
          type="radio"
          name="my-accordion-2"
          checked={open}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="text-xl font-medium collapse-title">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </>
  );
};

export default List;
