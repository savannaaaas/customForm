import Button from "@mui/material/Button";
export const RegisterButton = ({ handleOpen }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      onClick={handleOpen}
      style={{ backgroundColor: "pink", width: "200px", margin: "0 auto" }}
    >
      Register
    </Button>
  );
};
