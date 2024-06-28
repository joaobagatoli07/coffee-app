import UserInfo from "../components/cards/UserInfo";
import ProfileImage from "../components/display/ProfileImage";

function Error() {
    return (
      <div className="flex flex-col justify-center items-center gap-5 h-[80dvh]">
        <h1 className="text-3xl">Informações da conta</h1>
        <div className="flex gap-5">
            <ProfileImage idProfile={1} size={'200px'} />
            <div className="flex flex-col gap-5">
                <UserInfo title="Nome" type="phone" />
                <UserInfo title="Telefone" type="phone" />
                <UserInfo title="Email" type="phone" />
                <UserInfo title="Endereço" type="phone" />
            </div>
        </div>
      </div>
    );
  }
  
  export default Error;
  