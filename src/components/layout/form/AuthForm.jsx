import { Link, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../../utils/SignInSchema.js";
import { SignUpSchema } from "../../../utils/SignUpSchema.js";
import MainButton from "../../buttons/MainButton.jsx";

function AuthForm({ img, title, subtitle, children, buttonText, linkText, linkPath }) {
  // const navigate = useNavigate();
  let schema;

  if (title === 'Login') {
    schema = SignInSchema;
  }
  
  if (title === 'Cadastro') {
    schema = SignUpSchema;
  }
  
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  // const redirectToHomePage = () => {
  //   navigate('/');
  // }

  return (
    <FormProvider {...methods}>
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
            )}
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                {children}
              </div>
              <MainButton text={buttonText} type="submit" bgColor="bg-amber-600" />
            </form>
            <span className="mt-2 text-sm text-white">
              <Link to={linkPath}>{linkText}</Link>
            </span>
          </main>
        </section>
      </div>
    </FormProvider>
  );
}

export default AuthForm;
