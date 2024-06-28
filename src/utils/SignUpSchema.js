import * as yup from "yup"

export const SignUpSchema = yup
.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("O email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  password: yup.string().required("Senha é obrigatória")
});