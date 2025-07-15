import { useForm } from "react-hook-form";
import { RegisterButton } from "./RegisterButton";
export const RegistrationForm = () => {
  const { register, control, getValues, reset, watch, handleSubmit } =
    useForm();

  return (
    <form>
      <RegisterButton />
    </form>
  );
};
