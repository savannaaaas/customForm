import * as yup from "yup";
import dayjs from "dayjs";
const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPhone = new RegExp(/^\d{9}$/);
const regExpPassword = new RegExp(/^(?=.*[A-Z]).+$/);
export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("This field is not required")
    .min(2, "Minimum 2 characters required")
    .max(18, "Maximum 18 characters required"),
  email: yup
    .string()
    .required("This field is not required")
    .matches(regExpEmail, "Invalid format email"),
  phone: yup
    .string()
    .required("This field is not required")
    .matches(regExpPhone, "Invalid format phone"),
  password: yup
    .string()
    .required("This field is not required")
    .min(6, "Minimum 6 characters required")
    .matches(regExpPassword, "At least one capital letter"),
  confirmPassword: yup
    .string()
    .required("This field is not required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  birthday: yup
    .mixed()
    .test(
      "is-dayjs",
      "Неверная дата",
      (value) => dayjs.isDayjs(value) && value.isValid()
    )
    .required("Это поле обязательно"),
});
