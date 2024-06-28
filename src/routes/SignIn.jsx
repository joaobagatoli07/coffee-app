import Input from "../components/inputs/Input.jsx";
import AuthForm from "../components/layout/form/AuthForm.jsx";

function SignIn() {
  return (
    <AuthForm
      img="src/assets/images/coffee/pages/signInImage.jpg"
      title="Login"
      subtitle="Olá, seja bem vindo de volta"
      buttonText="Entrar"
      linkText="Criar uma conta"
      linkPath="/cadastro">
      <Input type="email" placeholder="Email" name="email" icon="email" />
      <Input type="password" placeholder="Senha" name="password" icon="lock" />
    </AuthForm>
  );
}

export default SignIn;
