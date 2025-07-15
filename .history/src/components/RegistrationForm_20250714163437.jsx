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
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      birthday: null,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <Typography variant="h3" style={{ color: "#f38fc4aa", margin: "10px" }}>
        Registration form
      </Typography>
      <form onBlur={handleSubmit(onSubmit)}>
        <Grid container spacing={2} flexDirection={"column"}>
          <Controller
            control={control}
            defaultValue={""}
            name="name"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
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
                  helperText={errors.name?.message}
                />
              );
            }}
          />

          <Controller
            control={control}
            defaultValue={""}
            name="email"
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
                  helperText={errors.email?.message}
                />
              );
            }}
          />

          <Controller
            control={control}
            defaultValue={""}
            name="phone"
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
          {errors.phone?.message}
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
            name="confirmPassword"
            render={({ field }) => {
              return <TextField {...field} required label="Сonfirm password" />;
            }}
          />
          {errors.confirmPassword?.message}
          <Controller
            control={control}
            defaultValue={""}
            name="birthday"
            render={({ field }) => {
              return (
                <LocalizationProvider
                  required
                  {...field}
                  dateAdapter={AdapterDayjs}
                >
                  <DatePicker label="Birthday" />
                </LocalizationProvider>
              );
            }}
          />
          {errors.birthday?.message}
          <RegisterButton />
        </Grid>
      </form>
    </>
  );
};
