import yup from "yup";
export const shema = yup.object().type({
  name: yup.object().required(""),
});
