import Input from "../components/inputs/Input.jsx";
import AuthForm from "../components/layout/form/AuthForm.jsx";

function SignUp() {
    return (
        <AuthForm
            img="src/assets/images/coffee/pages/signInImage.jpg" 
            title="Cadastro"
            buttonText="Cadastrar"
            redirecTo="/"
            linkText="Já possuo uma conta"
            linkPath="/login"
            >
            <Input type="text" placeholder="Nome" icon="user" />
            <Input type="tel" placeholder="Telefone" icon="phone" />
            <Input type="password" placeholder="Senha" icon="lock" />
            <Input type="password" placeholder="Confirme sua senha" icon="lock" />
        </AuthForm>
    );
}

export default SignUp;
