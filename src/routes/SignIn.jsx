import Input from "../components/inputs/Input.jsx";
import MainButton from "../components/buttons/MainButton.jsx";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex">
      <section className="h-screen w-3/5">
        <img
          src="src/assets/images/coffee/pages/signInImage.jpg"
          className="h-full w-full"
          alt="Imagem ilustrativa"
        />
      </section>
      <section className="bg-amber-950 h-screen w-2/5 flex justify-center items-center">
        <main className="h-4/5 flex flex-col justify-center items-center">
          <span className="font-rosarivo text-4xl text-white mb-5">Login</span>
          <span className="text-lg mb-4 text-white">
            Olá, seja bem vindo de volta
          </span>
          <form>
            <Input type="text" placeholder="Usuário" icon="user" />
            <Input type="password" placeholder="Senha" icon="lock" />
            <MainButton text="Entrar" bgColor="bg-amber-600" />
          </form>
          <span className="mt-2 text-sm text-white">
            <Link to="/Cadastro">Criar uma conta</Link>
          </span>
        </main>
      </section>
    </div>
  );
}

export default SignIn;
