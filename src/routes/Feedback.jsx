import MainButton from "../components/buttons/MainButton.jsx";

function Feedback({ imagem }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-10">
        <img src={imagem} />
        <p className="font-rosarivo text-2xl text-gray-600 text-center">
          Conta desconectada <br />
          com sucesso
        </p>
        <MainButton
          text={"Retornar a tela inicial"}
          bgColor={"bg-amber-950"}
        ></MainButton>
      </div>
    </div>
  );
}

export default Feedback;
