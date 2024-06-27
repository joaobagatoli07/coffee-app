import * as yup from "yup"

export const SignUpSchema = yup
.object({
  name: yup.string(),
  phone: yup.string(),
  password: yup.number(),
});