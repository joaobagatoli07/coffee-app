import ProfileImage from "../components/display/ProfileImage";
import Notification from "../components/display/Notification";

function Cart() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <Notification type={'Info'} description={'Você pode ser legal.'} />
      <Notification type={'Error'} description={'Você não é legal.'} />
      <Notification type={'Success'} description={'Você é legal.'} />
      <Notification type={'Warning'} description={'Você talvez seja legal.'} />
      <ProfileImage idProfile={3} size={'100px'} />
    </div>
  )
}


export default Cart;