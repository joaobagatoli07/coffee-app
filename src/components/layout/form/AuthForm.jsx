import MainButton from "../../buttons/MainButton.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AuthForm({ img, title, subtitle, children, buttonText, linkText, linkPath }) {
  const navigate = useNavigate();

  function redirectToHomePage() {
    navigate('/');
  }

  return (
    <div className="flex">
      <section className="h-screen w-3/5">
        <img
          src={img}
          className="h-full w-full object-cover"
          alt="Imagem ilustrativa"
        />
      </section>
      <section className="bg-amber-950 h-screen w-2/5 flex justify-center items-center">
        <main className="flex flex-col items-center">
          <span className="font-rosarivo text-4xl text-white mb-5">{title}</span>
          {subtitle && (
            <span className="text-lg mb-4 text-white">
              {subtitle}
            </span>
          )
          }
          <form>
            <div className="flex flex-col gap-3">
              {children}
            </div>
            <MainButton text={buttonText} bgColor="bg-amber-600" onClick={redirectToHomePage} />
          </form>
          <span className="mt-2 text-sm text-white">
            <Link to={linkPath}>{linkText}</Link>
          </span>
        </main>
      </section>
    </div>
  );
}

export default AuthForm;
