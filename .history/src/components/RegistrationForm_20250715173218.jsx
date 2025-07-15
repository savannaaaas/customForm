import { useState } from "react";
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
import dayjs, { Dayjs } from "dayjs";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #f38fc4aa",
  boxShadow: 24,
  p: 4,
};
export const RegistrationForm = () => {
  const {
    control,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      birthday: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    setOpen(true);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 600 }}>
          <h2 style={{ color: "pink", textAlign: "center" }}>
            Successfully registered
          </h2>
          <p style={{ color: "pink" }}>
            {JSON.stringify(getValues(), null, 4)}
          </p>
        </Box>
      </Modal>
      <Typography variant="h3" style={{ color: "#f38fc4aa", margin: "10px" }}>
        Registration form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} flexDirection={"column"}>
          <Controller
            control={control}
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
            name="phone"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  label="Phone"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">+375</InputAdornment>
                      ),
                    },
                  }}
                  helperText={errors.phone?.message}
                />
              );
            }}
          />

          <Controller
            control={control}
            defaultValue=""
            name="password"
            helperText={errors.password?.message}
            render={({ field }) => {
              return (
                <FormControl variant="outlined">
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <FormHelperText>{errors.password?.message}</FormHelperText>
                </FormControl>
              );
            }}
          />
          <Controller
            control={control}
            defaultValue=""
            name="confirmPassword"
            helperText={errors.password?.message}
            render={({ field }) => {
              return (
                <FormControl variant="outlined">
                  <InputLabel>Confirm password</InputLabel>
                  <OutlinedInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm password"
                  />
                  <FormHelperText>
                    {errors.confirmPassword?.message}
                  </FormHelperText>
                </FormControl>
              );
            }}
          />

          <Controller
            control={control}
            defaultValue=""
            name="birthday"
            render={({ field }) => {
              return (
                <LocalizationProvider required dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Birthday"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) =>
                      field.onChange(date ? date.format("YYYY-MM-DD") : "")
                    }
                  />
                </LocalizationProvider>
              );
            }}
            helperText={errors.birthday?.message}
          />

          <RegisterButton />
        </Grid>
      </form>
    </>
  );
};
