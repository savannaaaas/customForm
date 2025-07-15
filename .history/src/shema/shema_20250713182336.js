import * as yup from "yup";
export const shema = yup.object().shape({
  name: yup.string().required("The name field is required."),
  email: yup
    .string()
    .required("The email field is required.")
    .email("Incorrected format email"),
  password: yup.string().required("The password field is required.").length(6),
});
