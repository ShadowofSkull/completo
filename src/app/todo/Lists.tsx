import List from "./List";

const Lists = ({ marginY }: { marginY: string }) => {
  return (
    <div className="relative flex-col items-center justify-center w-screen h-screen">
      <List marginY={marginY} />
      <List marginY={marginY} />
      <List marginY={marginY} />
    </div>
  );
};

export default Lists;
