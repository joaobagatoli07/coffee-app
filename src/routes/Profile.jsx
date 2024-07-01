import UserInfo from '../components/cards/UserInfo'
import ProfileImage from "../components/display/ProfileImage";
import IntermediateButton from '../components/buttons/IntermediateButton';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  function logOut() {
    navigate("/login");
    localStorage.removeItem('userLogged');
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-[80dvh]">
      <h1 className="text-3xl">Informações da conta</h1>
      <div className="flex gap-5">
        <ProfileImage idProfile={1} size={'200px'} />
        <div className="flex flex-col gap-5">
          <UserInfo title='Nome' type='João Silva' />
          <UserInfo title='Telefone' type='(11) 1234-5678' />
          <UserInfo title='Email' type='joao@gmail.com' />
          <UserInfo title='Endereço' type='Rua das Flores, 123, São Paulo, SP' />
          <IntermediateButton text='Sair' onClick={logOut} />
        </div>
      </div>
    </div>
  );
}

export default Error;
