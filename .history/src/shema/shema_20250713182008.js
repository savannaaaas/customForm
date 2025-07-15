import yup from "yup";
export const shema = yup.object().type({
  name: yup.object().required("The name field is required."),
  email: yup
    .object()
    .required("The email field is required.")
    .email("Incorrected format email"),
});
