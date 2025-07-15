import { Controller, useForm } from "react-hook-form";
import { RegisterButton } from "./RegisterButton";
import { schema } from "../shema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export const RegistrationForm = () => {
  const { register, control, getValues, reset, watch, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      birthday: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Typography variant="h3" style={{ color: "#f38fc4aa", margin: "10px" }}>
        Registration form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} flexDirection={"column"}>
          <Controller
            control={control}
            defaultValue={""}
            name="Name"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  label="Name"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              );
            }}
          />
          <Controller
            control={control}
            defaultValue={""}
            name="Email"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  label="Email"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              );
            }}
          />
          <Controller
            control={control}
            defaultValue={""}
            name="Phone"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  label="Phone"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">+375</InputAdornment>
                      ),
                    },
                  }}
                />
              );
            }}
          />
          <Controller
            control={control}
            defaultValue={""}
            name="Password"
            render={({ field }) => {
              return <TextField {...field} required label="Password" />;
            }}
          />
          <Controller
            control={control}
            defaultValue={""}
            name="Сpnfirm password"
            render={({ field }) => {
              return <TextField {...field} required label="Сonfirm password" />;
            }}
          />
          <Controller
            control={control}
            defaultValue={""}
            name="Birthday"
            render={() => {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Birthday" />
                </LocalizationProvider>
              );
            }}
          />
          <RegisterButton />
        </Grid>
      </form>
    </>
  );
};
