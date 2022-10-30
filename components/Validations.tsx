import * as yup from "yup";

const Validations = yup.object({
  email: yup
    .string()
    .nullable()
    .email("Geçerli bir email girin.")
    .required("Zorunlu alan."),
  password: yup
    .string()
    .min(6, "Parolanız en az 6 karakter olmalıdır.")
    .required("Zorunlu alan."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required("Zorunlu alan."),
});

export default Validations;
