import { useForm } from "react-hook-form";
import { RegisterButton } from "./RegisterButton";
import { schema } from "../shema/shema";
import {yupResolver} from
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
      <RegisterButton type="submit" />
    </form>
  );
};
