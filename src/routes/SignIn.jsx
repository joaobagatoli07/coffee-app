import Input from "../components/inputs/Input.jsx";
import AuthForm from "../components/layout/form/AuthForm.jsx";
import { useState } from "react";

function SignIn() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  return (
    <AuthForm
      img="src/assets/images/coffee/pages/signInImage.jpg"
      title="Login"
      subtitle="Olá, seja bem vindo de volta"
      buttonText="Entrar"
      linkText="Criar uma conta"
      linkPath="/cadastro">
      <Input type="text" placeholder="Usuário" name="user" icon="user" onChange={setUser}  />
      <Input type="password" placeholder="Senha" name="password" icon="lock" onChange={setPassword} />
    </AuthForm>
  );
}

export default SignIn;
