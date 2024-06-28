
import ProfileImage from "../components/display/ProfileImage";

function Error() {
    return (
      <div className="flex flex-col justify-center items-center gap-5 h-[80dvh]">
        <h1 className="text-3xl">Informações da conta</h1>
        <div className="flex gap-5">
            <ProfileImage idProfile={1} size={'200px'} />
            <div className="flex flex-col gap-5">
                
            </div>
        </div>
      </div>
    );
  }
  
  export default Error;
  