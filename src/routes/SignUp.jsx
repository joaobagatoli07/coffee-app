import Input from "../components/inputs/Input.jsx";
import AuthForm from "../components/layout/form/AuthForm.jsx";

function SignUp() {
    return (
        <AuthForm
            img="src/assets/images/coffee/pages/signUpImage.jpg" 
            title="Cadastro"
            buttonText="Cadastrar"
            linkText="Já possuo uma conta"
            linkPath="/login">
            <Input type="text" placeholder="Nome" name="name" icon="user" />
            <Input type="tel" placeholder="Telefone" name="phone" icon="phone" />
            <Input type="password" placeholder="Senha" name="password" icon="lock" />
            <Input type="password" placeholder="Confirme sua senha" icon="lock" />
        </AuthForm>
    );
}

export default SignUp;
