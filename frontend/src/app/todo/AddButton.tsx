import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  return (

      <AddIcon
        className="absolute z-50 -top-3 left-72"
        onClick={() => console.log("click")}
      />

  );
};

export default AddButton;
