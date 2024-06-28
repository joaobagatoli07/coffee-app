import Erro from '../assets/images/coffee/pages/image.png.png'
import MainButton from '../components/buttons/MainButton';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/');
  }

  return (
    <div className='flex flex-col h-screen gap-8 items-center justify-center w-srceen'>
      <div className='flex'>
        <p className='text-9xl font-semibold italic text-amber-950 mr-3'>4</p>
        <img src={Erro} alt="" />
        <p className='text-9xl font-semibold italic text-amber-950'>4</p>
      </div>
      <div>
        <p>Opss... Algo deu errado</p>
      </div>
      <div>
        <MainButton bgColor='bg-amber-950' type='button' text='Retornar a tela inicial' onClick={redirectToHome} />
      </div>
    </div>
  )
}

export default Error;
