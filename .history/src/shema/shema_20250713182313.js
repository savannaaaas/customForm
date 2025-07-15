import * as yup from "yup";
export const shema = yup.object().type({
  name: yup.string().required("The name field is required."),
  email: yup
    .object()
    .required("The email field is required.")
    .email("Incorrected format email"),
  password: yup.object().required("The password field is required.").length(6),
});
