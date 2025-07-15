import { Controller, useForm } from "react-hook-form";
import { RegisterButton } from "./RegisterButton";
import { schema } from "../shema/shema";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
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
          return <TextField required label="Name" />;
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
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          );
        }}
      />
      <Controller
        control={control}
        defaultValue={""}
        name="Name"
        render={() => {
          return <TextField required label="Name" />;
        }}
      />
      <RegisterButton type="submit" />
    </form>
  );
};
