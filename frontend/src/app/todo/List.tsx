"use client";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const List = ({ marginY }: { marginY: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={
          "relative z-0 collapse collapse-arrow bg-base-200 w-80 mx-auto " +
          marginY
        }
      >
        <input
          type="radio"
          name="my-accordion-2"
          checked={open}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="pb-10 text-xl font-medium collapse-title">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
        <StarBorderIcon
          className="absolute z-50 top-20 left-64"
          onClick={() => console.log("star")}
        />
        <DeleteIcon
          className="absolute z-50 top-20 left-72"
          onClick={() => console.log("delete")}
        />
      </div>
      <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          Header
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default List;
