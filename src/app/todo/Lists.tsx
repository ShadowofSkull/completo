import List from "./List";

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
      {name}
      {/* temp just to get rid of error */}
    </div>
  );
};

export default Lists;
