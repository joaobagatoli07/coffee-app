import * as yup from "yup"

export const SignInSchema = yup
.object({
  name: yup.string(),
  password: yup.number(),
});