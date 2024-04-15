import List from "./List";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

type Props = {
  marginY: string;
  name: string;
};

const Lists = ({ marginY, name }: Props) => {
  return (
    <div className="relative flex-col items-center justify-center w-screen h-screen">
      <List  marginY={marginY} />
      <List  marginY={marginY} />
      <List  marginY={marginY} />
      
      {/* <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          Header
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          Header
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          Header
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion> */}
      {name}
      {/* temp just to get rid of error */}
    </div>
  );
};

export default Lists;
