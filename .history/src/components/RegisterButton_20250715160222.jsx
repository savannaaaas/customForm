import Button from "@mui/material/Button";
export const RegisterButton = ({ hadleClick }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      onClick={hadleClick}
      style={{ backgroundColor: "pink", width: "200px", margin: "0 auto" }}
    >
      Register
    </Button>
  );
};
