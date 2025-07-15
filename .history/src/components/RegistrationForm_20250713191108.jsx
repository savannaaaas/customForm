import { useForm } from "react-hook-form";
import { RegisterButton } from "./RegisterButton";
export const RegistrationForm = () => {
  const { register, control, getValues, reset, watch, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      age: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RegisterButton />
    </form>
  );
};
