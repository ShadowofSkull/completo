import Lists from "./Lists";

const page = () => {
  return (
    <div className="flex-col items-center justify-center m-4">
      <h1 className="text-xl font-bold text-center">TODO List</h1>
      <Lists marginY="my-6" />
      <button className="btn btn-primary">Button</button>
    </div>
  );
};

export default page;
