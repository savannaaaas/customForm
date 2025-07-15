import Button from "@mui/material/Button";
export const RegisterButton = React.memo(() => {
  return (
    <Button
      type="submit"
      variant="contained"
      style={{ backgroundColor: "pink", width: "200px", margin: "0 auto" }}
    >
      Register
    </Button>
  );
});
