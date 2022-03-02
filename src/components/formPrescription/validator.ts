import * as yup from "yup";

export const schema = yup.object().shape({
  prescription: yup.string().required("Campo obrigatório"),
});
