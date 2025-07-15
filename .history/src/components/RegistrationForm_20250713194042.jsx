import { Controller, useForm } from "react-hook-form";
import { RegisterButton } from "./RegisterButton";
import { schema } from "../shema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        defaultValue={""}
        name="Name"
        render={() => {
          return (
            <TextField
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
        render={() => {
          return (
            <TextField
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
        render={() => {
          return (
            <TextField
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
        render={() => {
          return <TextField required label="Password" />;
        }}
      />
      <Controller
        control={control}
        defaultValue={""}
        name="Сpnfirm password"
        render={() => {
          return <TextField required label="Сonfirm password" />;
        }}
      />
      <RegisterButton type="submit" />
    </form>
  );
};
