import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(6, "Senha deve ter no mínimo 6 dígitos"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem!")
    .required("Campo obrigatório"),
});
