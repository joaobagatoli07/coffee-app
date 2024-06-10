import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import Orders from "./Orders.jsx";
import Feedback from "./Feedback.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Error from "./Error.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/carrinho",
          element: <Cart />,
        },
        {
          path: "/pedidos",
          element: <Orders />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
        {
          path: "/cadastro",
          element: <SignUp />,
        },
        {
          path: "/retorno",
          element: <Feedback />,
        },
      ],
    },
  ]);

  export default router